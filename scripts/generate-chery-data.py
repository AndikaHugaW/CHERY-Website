#!/usr/bin/env python3
"""Generate src/data/cars.ts and specifications.ts from scripts/chery-api-full.json"""
import json
import re
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
API_PATH = ROOT / "scripts" / "chery-api-full.json"
CARS_TS = ROOT / "src" / "data" / "cars.ts"
SPECS_TS = ROOT / "src" / "data" / "specifications.ts"
VARIANTS_TS = ROOT / "src" / "data" / "variants.ts"


def fmt_price_starting(n):
    n = int(n or 0)
    if n <= 0:
        return "Segera Hadir", "Harga Segera Diumumkan", 0
    full = f"Rp {n:,}".replace(",", ".")
    jt = n / 1_000_000
    starting = f"Rp {int(jt)} Jt" if jt == int(jt) else f"Rp {jt:.1f} Jt"
    return starting, full, n


def powertrain_from_api(p):
    slug = (p.get("model") or {}).get("slug", "ice")
    return {"bev": "BEV", "csh": "CSH", "ice": "ICE"}.get(slug, "ICE")


def cat_fuel(p):
    slug = (p.get("model") or {}).get("slug", "ice")
    name = (p.get("name") or "").upper()
    if slug == "bev":
        return "EV", "Listrik"
    if slug == "csh":
        return "SUV", "Hybrid"
    if "C5" in name and "TIGGO" not in name:
        return "SEDAN", "Bensin"
    return "SUV", "Bensin"


def pick_engine(p, highlights):
    h = p.get("highlight_specs_content_idn") or {}
    if h.get("MESIN"):
        return h["MESIN"]
    return highlights[0] if highlights else "N/A"


def pick_power(p):
    h = p.get("highlight_specs_content_idn") or {}
    po, t = h.get("OUTPUT TENAGA"), h.get("TORSI")
    if po and t:
        return f"{po} / {t}"
    return po or "N/A"


def pick_trans(p):
    h = p.get("highlight_specs_content_idn") or {}
    eng = str(h.get("MESIN", ""))
    for token, detail in [("CVT", "CVT"), ("DCT", "DCT"), ("AT", "Automatic")]:
        if token in eng:
            return "Automatic", detail
    for v in p.get("variants") or []:
        for sec in v.get("specs") or []:
            if sec.get("title_en") == "Basic":
                tr = (sec.get("content_en") or {}).get("Transmission")
                if tr:
                    return "Automatic", tr
    return "Automatic", "Automatic"


def seats_from_specs(p):
    for v in p.get("variants") or []:
        for sec in v.get("specs") or []:
            if sec.get("title_en") == "Basic":
                seats = (sec.get("content_en") or {}).get("Seats")
                m = re.search(r"(\d+)", str(seats or ""))
                if m:
                    return int(m.group(1))
    return 5


def gallery(p):
    imgs = []
    for key in (
        "image_path_desktop",
        "thumbnail_front_image_path_desktop",
        "thumbnail_side_image_path_desktop",
    ):
        if p.get(key):
            imgs.append(p[key])
    for ph in p.get("photos") or []:
        if ph.get("image_path_desktop"):
            imgs.append(ph["image_path_desktop"])
    out, seen = [], set()
    for u in imgs:
        if u and u not in seen:
            seen.add(u)
            out.append(u)
    return out


def clean_text(val):
    if isinstance(val, list):
        val = " ".join(str(x) for x in val)
    text = re.sub(r"<[^>]+>", " ", str(val or ""))
    return re.sub(r"\s+", " ", text).strip()


SPEC_SECTIONS_FOR_FEATURES = (
    "Interior",
    "Exterior",
    "Safety",
    "Driving Assistant",
    "Advance Driving Assistant",
)


def spec_content(section: dict) -> dict:
    content = section.get("content_idn")
    if isinstance(content, dict) and content:
        return content
    content = section.get("content_en")
    return content if isinstance(content, dict) else {}


def variant_basic(variant: dict) -> dict:
    for sec in variant.get("specs") or []:
        if sec.get("title_en") == "Basic":
            return spec_content(sec)
    return {}


def variant_engine_detail(variant: dict, fallback: str) -> str:
    basic = variant_basic(variant)
    eng = basic.get("Engine Type") or basic.get("Tipe Mesin")
    if eng:
        return str(eng)
    hi = variant.get("highlight_specs_list_idn") or []
    for item in hi:
        low = item.lower()
        if any(k in low for k in ("mesin", "engine", "tgdi", "dct", "cvt", "baterai", "hybrid", "bev")):
            return item
    return hi[0] if hi else fallback


def features_from_spec_sections(variant: dict, limit: int = 16) -> list[str]:
    out: list[str] = []
    seen: set[str] = set()

    def add(label: str) -> None:
        text = clean_text(label)
        if not text or text in seen or len(text) < 2:
            return
        seen.add(text)
        out.append(text)

    for sec in variant.get("specs") or []:
        title = sec.get("title_en") or ""
        if title not in SPEC_SECTIONS_FOR_FEATURES:
            continue
        for name, val in spec_content(sec).items():
            val = clean_text(val)
            if val in ("●", "-"):
                add(name)
            elif val and val not in ("N/A", "No"):
                add(f"{name}: {val}" if len(name) < 48 else val)
            if len(out) >= limit:
                return out
    return out


def feature_fingerprint(text: str) -> str:
    core = text
    if ":" in core:
        core = core.split(":", 1)[1]
    return re.sub(r"[^a-z0-9]+", "", core.lower())


def build_car_features(p: dict, max_items: int = 24) -> list[str]:
    features: list[str] = []
    seen: set[str] = set()

    def add(item) -> None:
        text = clean_text(item)
        if not text:
            return
        fp = feature_fingerprint(text)
        if fp in seen:
            return
        seen.add(fp)
        features.append(text)

    for x in p.get("highlight_specs_list_idn") or p.get("highlight_specs_list_en") or []:
        add(x)

    highlight_content = p.get("highlight_specs_content_idn") or {}
    for key, val in highlight_content.items():
        if val:
            add(f"{key}: {val}")

    hf = p.get("highlight_feature_content_idn")
    if isinstance(hf, list):
        for block in hf:
            if isinstance(block, dict):
                add(block.get("title_idn") or block.get("title_en"))
            else:
                add(block)
    elif isinstance(hf, dict):
        for val in hf.values():
            add(val)

    for block in p.get("_features") or []:
        add(block.get("title_idn") or block.get("title_en"))

    for block in p.get("_safeties") or []:
        add(block.get("title_idn") or block.get("title_en"))

    default_variant = (p.get("variants") or [{}])[0]
    for item in features_from_spec_sections(default_variant, limit=max_items):
        add(item)
        if len(features) >= max_items:
            break

    return features[:max_items]


def build_variant_features(variant: dict, fallback: list[str]) -> list[str]:
    merged: list[str] = []
    seen: set[str] = set()

    def add(item) -> None:
        text = clean_text(item)
        if not text or text in seen:
            return
        seen.add(text)
        merged.append(text)

    for x in variant.get("highlight_specs_list_idn") or variant.get("highlight_specs_list_en") or []:
        add(x)
    for x in features_from_spec_sections(variant, limit=12):
        add(x)
    if len(merged) < 3:
        for x in fallback:
            add(x)
    return merged[:10]


def extract_dimension_diagram(p: dict) -> dict | None:
    basic = variant_basic((p.get("variants") or [{}])[0])
    if not basic:
        return None
    exterior = {}
    for sec in (p.get("variants") or [{}])[0].get("specs") or []:
        if sec.get("title_en") == "Exterior":
            exterior = spec_content(sec)
            break
    load = exterior.get("Load Capacity") or exterior.get("Load Capacity Rail") or "-"
    return {
        "lengthWidthHeight": str(basic.get("Dimension", "-")),
        "wheelbase": str(basic.get("Wheel Base", "-")),
        "tread": "-",
        "overhang": "-",
        "groundClearance": str(exterior.get("Ground Clearance", "-")),
        "cargoCapacity": str(load),
    }


def pick_description(p: dict) -> str:
    for key in (
        "meta_desc_idn",
        "features_desc_idn",
        "technologies_desc_idn",
        "highlight_feature_desc_idn",
        "schema_org_desc_idn",
        "seo_box_content_idn",
    ):
        text = clean_text(p.get(key))
        if text and len(text) > 40:
            return text[:520]
    return f"{p['name']} — kendaraan resmi Chery Indonesia."


def main():
    with API_PATH.open(encoding="utf-8") as f:
        api = json.load(f)

    cars = []
    car_specs = {}
    car_variants = {}

    for slug, p in api.items():
        highlights = p.get("highlight_specs_list_idn") or p.get("highlight_specs_list_en") or []
        starting, formatted, raw = fmt_price_starting(p.get("price"))
        category, fuel = cat_fuel(p)
        powertrain = powertrain_from_api(p)
        tx_type, tx_detail = pick_trans(p)
        features = build_car_features(p)
        tagline = clean_text(
            p.get("highlight_feature_title_idn")
            or p.get("features_title_idn")
            or p.get("meta_desc_idn")
            or (highlights[0] if highlights else p["name"])
        )[:160]
        desc = pick_description(p)

        badge = (
            {"text": "SEGERA HADIR", "type": "promo"}
            if raw == 0 or p.get("is_upcoming_price")
            else {"text": "TERSEDIA", "type": "ready"}
        )

        gal = gallery(p)
        img = gal[0] if gal else ""

        record = {
            "id": slug,
            "name": p["name"],
            "trim": (p.get("variants") or [{}])[0].get("name", ""),
            "model": p["name"],
            "brand": "Chery",
            "year": "2026",
            "color": (p.get("colors") or [{}])[0].get("name", ""),
            "description": desc,
            "kilometer": "0 km",
            "status": "Tersedia" if raw > 0 else "Coming Soon",
            "tagline": tagline,
            "category": category,
            "powertrain": powertrain,
            "bodyType": category,
            "priceStarting": starting,
            "formattedPrice": formatted,
            "rawPrice": raw,
            "engine": pick_engine(p, highlights),
            "power": pick_power(p),
            "transmissionType": tx_type,
            "transmissionDetail": tx_detail,
            "fuelType": fuel,
            "seats": seats_from_specs(p),
            "image": img,
            "gallery": gal[:6],
            "badge": badge,
            "features": features,
            "specs": {"warranty": "Garansi resmi Chery Indonesia"},
        }

        if fuel == "Listrik":
            if p.get("battery_capacity"):
                record["battery"] = f"{p['battery_capacity']} kWh"
            if p.get("range_distance"):
                record["range"] = f"{p['range_distance']} km"
                record["specs"]["range"] = record["range"]
            h = p.get("highlight_specs_content_idn") or {}
            if h.get("PENGGERAK"):
                record["driveType"] = h["PENGGERAK"]
                record["specs"]["driveType"] = h["PENGGERAK"]

        cars.append(record)

        variants = p.get("variants") or []
        if not variants:
            continue

        vnames = [v["name"] for v in variants]
        sections = {}
        for v in variants:
            for sec in v.get("specs") or []:
                title = sec.get("title_idn") or sec.get("title_en") or "Spesifikasi"
                content = sec.get("content_idn")
                if not isinstance(content, dict) or not content:
                    content = sec.get("content_en") or {}
                if not content:
                    continue
                for k, val in content.items():
                    sections.setdefault(title, {}).setdefault(k, {})[v["name"]] = str(val)

        categories = []
        for title, items in sections.items():
            cat_id = re.sub(r"[^a-z0-9]+", "-", title.lower()).strip("-") or "spec"
            categories.append(
                {
                    "id": cat_id,
                    "title": title,
                    "items": [{"name": k, "values": vals} for k, vals in items.items()],
                }
            )

        spec_entry = {
            "carId": slug,
            "carName": p["name"],
            "tagline": record["tagline"],
            "variants": vnames,
            "categories": categories,
        }
        diagram = extract_dimension_diagram(p)
        if diagram:
            spec_entry["dimensionDiagram"] = diagram
        car_specs[slug] = spec_entry

        variant_cards = []
        for v in variants:
            _, var_formatted, var_raw = fmt_price_starting(v.get("price") or p.get("price"))
            v_hi = v.get("highlight_specs_list_idn") or v.get("highlight_specs_list_en") or highlights
            v_basic = variant_basic(v)
            v_trans = v_basic.get("Transmission") or tx_detail
            variant_cards.append(
                {
                    "name": v["name"],
                    "trim": v["name"],
                    "price": var_formatted,
                    "image": v.get("thumbnail_image_path_desktop") or record["image"],
                    "badge": "SEGERA HADIR" if var_raw == 0 else "TERSEDIA",
                    "engine": variant_engine_detail(v, record["engine"]),
                    "transmission": v_trans,
                    "seats": int(re.search(r"(\d+)", str(v_basic.get("Seats", seats_from_specs(p)))).group(1))
                    if re.search(r"(\d+)", str(v_basic.get("Seats", "")))
                    else seats_from_specs(p),
                    "fuelType": fuel,
                    "features": build_variant_features(v, record["features"]),
                }
            )
        car_variants[slug] = variant_cards

    iface = CARS_TS.read_text(encoding="utf-8").split("export const CARS_DATA")[0].rstrip() + "\n\n"
    header = f"// Generated from https://chery.co.id CMS ({datetime.now().date()})\n\n"
    car_body = header + "export const CARS_DATA: Car[] = " + json.dumps(cars, ensure_ascii=False, indent=2) + ";\n"
    CARS_TS.write_text(iface + car_body, encoding="utf-8")

    spec_iface = '''export interface SpecItem {
  name: string;
  subName?: string;
  values: Record<string, string>;
}

export interface SpecCategory {
  id: string;
  title: string;
  items: SpecItem[];
}

export interface CarSpecification {
  carId: string;
  carName: string;
  tagline: string;
  variants: string[];
  categories: SpecCategory[];
  dimensionDiagram?: {
    lengthWidthHeight: string;
    wheelbase: string;
    tread: string;
    overhang: string;
    groundClearance: string;
    cargoCapacity: string;
  };
}

'''
    spec_body = (
        f"// Generated from https://chery.co.id CMS ({datetime.now().date()})\n\n"
        + "export const CAR_SPECIFICATIONS: Record<string, CarSpecification> = "
        + json.dumps(car_specs, ensure_ascii=False, indent=2)
        + ";\n"
    )
    SPECS_TS.write_text(spec_iface + spec_body, encoding="utf-8")

    variant_iface = """export interface CarVariantCard {
  name: string;
  trim: string;
  price: string;
  image: string;
  badge?: string;
  engine: string;
  transmission: string;
  seats: number;
  fuelType: string;
  features: string[];
}

"""
    variant_body = (
        f"// Generated from https://chery.co.id CMS ({datetime.now().date()})\n\n"
        + "export const CAR_VARIANTS_MAP: Record<string, CarVariantCard[]> = "
        + json.dumps(car_variants, ensure_ascii=False, indent=2)
        + ";\n"
    )
    VARIANTS_TS.write_text(variant_iface + variant_body, encoding="utf-8")
    print(f"Wrote {len(cars)} cars, {len(car_specs)} specification sets, {len(car_variants)} variant maps")


if __name__ == "__main__":
    main()

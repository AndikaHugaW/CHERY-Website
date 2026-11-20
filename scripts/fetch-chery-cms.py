#!/usr/bin/env python3
"""Fetch full product data from cms.chery.co.id into scripts/chery-api-full.json."""
import json
import sys
import urllib.request
from pathlib import Path

BASE = "https://cms.chery.co.id/api/v1"
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "scripts" / "chery-api-full.json"

SUB_RESOURCES = ("features", "safeties")


def get_json(path: str) -> dict:
    url = f"{BASE}/{path}"
    req = urllib.request.Request(url, headers={"Accept": "application/json", "User-Agent": "CheryDealerDataSync/1.0"})
    with urllib.request.urlopen(req, timeout=120) as resp:
        return json.load(resp)


def main() -> int:
    listing = get_json("product-types")
    items = listing.get("data") or []
    result = {}
    errors = []

    for item in items:
        slug = item["slug"]
        try:
            detail = get_json(f"product-types/{slug}")
            product = detail.get("data") or {}
            for sub in SUB_RESOURCES:
                try:
                    sub_res = get_json(f"product-types/{slug}/{sub}")
                    product[f"_{sub}"] = sub_res.get("data") or []
                except Exception as sub_err:
                    product[f"_{sub}"] = []
                    errors.append(f"{slug}/{sub}: {sub_err}")
            result[slug] = product
            print(f"OK {slug} ({len(product.get('variants') or [])} variants)")
        except Exception as err:
            errors.append(f"{slug}: {err}")
            print(f"FAIL {slug}: {err}", file=sys.stderr)

    OUT.write_text(json.dumps(result, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"\nWrote {len(result)} products -> {OUT}")
    if errors:
        print(f"Warnings: {len(errors)}", file=sys.stderr)
    return 0 if result else 1


if __name__ == "__main__":
    raise SystemExit(main())

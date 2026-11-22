import {
  CAR_GALLERY_MANIFEST,
  CAR_GALLERY_FILE_HASHES,
} from '@/data/car-gallery-manifest';
import { normalizeCarKey } from './car-key.mjs';

// Satu helper normalisasi untuk pemetaan nama/slug mobil ↔ nama folder.
// Dipakai bersama oleh runtime ini dan skrip build (car-key.mjs), jadi
// tidak ada logika normalisasi yang diduplikasi.
export { normalizeCarKey };

/** Referensi mobil yang cukup untuk memetakan ke folder gambarnya. */
export interface CarImageRef {
  id: string;
  name?: string;
  model?: string;
  /** Gambar kartu katalog (field yang sama dengan VehicleCard). */
  image?: string;
}

/**
 * Kunci path untuk perbandingan: buang query/fragment, decode %20, huruf
 * kecil. Dengan begitu `/images/katalog unit/x.jpg` dan
 * `/images/katalog%20unit/x.jpg` dianggap path yang sama.
 */
function pathKey(url: string): string {
  const withoutQuery = url.split(/[?#]/)[0];
  try {
    return decodeURIComponent(withoutQuery).toLowerCase();
  } catch {
    return withoutQuery.toLowerCase();
  }
}

/** Index hash: path ternormalisasi → md5 (dibangun sekali saat modul dimuat). */
const HASH_BY_PATH = new Map(
  Object.entries(CAR_GALLERY_FILE_HASHES).map(([url, hash]) => [pathKey(url), hash])
);

/**
 * Susun galeri final satu mobil:
 *
 *   [gambar kartu katalog] + [file folder, terurut natural sort]
 *
 * Gambar kartu katalog (`car.image`) selalu di posisi pertama sehingga
 * primary di halaman detail identik dengan gambar di kartu katalog —
 * membaca field yang sama persis, bukan salinan.
 *
 * Deduplikasi dua lapis:
 *  - path file (sama persis / beda encoding tetap dianggap sama)
 *  - isi file via hash MD5 (file berbeda path tapi isinya identik hanya
 *    muncul sekali, dan tetap di posisi pertama bila itu gambar katalog)
 *
 * Mengembalikan `[]` bila tidak ada gambar sama sekali — pemanggil wajib
 * menampilkan placeholder yang aman, bukan error.
 */
export function getCarGallery(car: CarImageRef): string[] {
  // 1. Daftar file folder: coba id, lalu name, lalu model.
  let folderFiles: readonly string[] = [];
  for (const candidate of [car.id, car.name, car.model]) {
    if (!candidate) continue;
    const urls = CAR_GALLERY_MANIFEST[normalizeCarKey(candidate)];
    if (urls && urls.length > 0) {
      folderFiles = urls;
      break;
    }
  }

  // 2. Susun dengan gambar katalog di depan, buang yang duplikat.
  const result: string[] = [];
  const seenPaths = new Set<string>();
  const seenHashes = new Set<string>();

  const add = (url: string | null | undefined) => {
    if (!url) return;

    const key = pathKey(url);
    if (seenPaths.has(key)) return;

    const hash = HASH_BY_PATH.get(key);
    if (hash) {
      if (seenHashes.has(hash)) return;
      seenHashes.add(hash);
    }

    seenPaths.add(key);
    result.push(url);
  };

  add(car.image); // gambar kartu katalog — posisi pertama
  for (const url of folderFiles) add(url);

  return result;
}

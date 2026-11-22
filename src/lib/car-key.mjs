/**
 * Normalisasi nama/slug mobil menjadi kunci folder/galeri.
 *
 * Modul ini sengaja ditulis sebagai `.mjs` polos (tanpa dependensi) supaya
 * bisa dipakai dari DUA tempat dengan SATU implementasi:
 *   - skrip build `scripts/generate-car-gallery-manifest.mjs` (Node)
 *   - runtime `src/lib/car-gallery.ts` (TypeScript / browser)
 *
 * Aturan: huruf kecil, spasi & underscore → tanda hubung, rapikan yang
 * berulang dan yang ada di ujung.
 * Contoh: "CHERY Q" → "chery-q", "Tiggo 8 Pro Max" → "tiggo-8-pro-max".
 *
 * @param {string} value
 * @returns {string}
 */
export function normalizeCarKey(value) {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export default normalizeCarKey;

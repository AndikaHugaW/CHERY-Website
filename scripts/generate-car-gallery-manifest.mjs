#!/usr/bin/env node
/**
 * Membaca folder gambar tiap mobil lalu menulis manifest statis ke
 * `src/data/car-gallery-manifest.ts`.
 *
 * Kenapa manifest? Komponen galeri adalah client component sehingga tidak
 * boleh memakai `fs`. Dengan manifest, daftar file dibaca sekali saat build
 * dan dikirim ke komponen sebagai data biasa.
 *
 * Jalankan: node scripts/generate-car-gallery-manifest.mjs
 * (otomatis lewat `npm run dev` / `npm run build` — lihat package.json)
 *
 * Aturan:
 * - Hanya ekstensi gambar: .png .jpg .jpeg .webp .avif
 * - File tersembunyi (.DS_Store, .gitkeep, dst) diabaikan
 * - Kunci = hasil normalizeCarKey(nama folder) — SATU helper yang sama
 *   dengan yang dipakai runtime (src/lib/car-key.mjs), bukan hardcode
 * - Urutan = urutan penempatan di folder, dengan natural sort numerik
 *   (2, 3, ... 10, 11 — bukan 10, 11, 2)
 * - Deduplikasi berdasarkan path file DAN isi file (hash MD5)
 * - Emit juga CAR_GALLERY_FILE_HASHES (path → md5) agar runtime bisa
 *   mendeteksi gambar katalog yang isinya identik dengan file folder
 *   meski path-nya berbeda
 * - Folder yang tidak ada / kosong tetap ditulis sebagai `[]` agar aman
 */
import { createHash } from 'node:crypto';
import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { normalizeCarKey } from '../src/lib/car-key.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const IMAGES_ROOT = path.join(ROOT, 'public', 'images', 'katalog unit');
const OUT_FILE = path.join(ROOT, 'src', 'data', 'car-gallery-manifest.ts');

/** Ekstensi gambar yang diizinkan (huruf besar/kecil bebas). */
const IMAGE_EXTENSIONS = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif']);

/**
 * Angka pertama pada nama file dipakai sebagai kunci urut utama.
 * "hero-banner 1.jpg" → 1, "10.webp" → 10, "2.png" → 2.
 * Tanpa ini, natural sort biasa menaruh "2.png" sebelum "hero-banner 1.jpg"
 * karena membandingkan karakter '2' dengan 'h'.
 */
function firstNumber(name) {
  const match = name.match(/\d+/);
  return match ? Number.parseInt(match[0], 10) : Number.POSITIVE_INFINITY;
}

/** Natural sort numerik: 1, 2, 3, ... 10, 11 (bukan 1, 10, 11, 2). */
function naturalCompare(a, b) {
  const diff = firstNumber(a) - firstNumber(b);
  if (diff !== 0) return diff;
  return a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' });
}

function isImageFile(name) {
  if (name.startsWith('.')) return false; // .DS_Store, .gitkeep, dst.
  return IMAGE_EXTENSIONS.has(path.extname(name).toLowerCase());
}

/** Path publik (dengan spasi pada "katalog unit") untuk satu file. */
function publicUrl(relativePath) {
  return `/images/katalog unit/${relativePath.split(path.sep).join('/')}`;
}

function md5(filePath) {
  return createHash('md5').update(readFileSync(filePath)).digest('hex');
}

function main() {
  if (!existsSync(IMAGES_ROOT)) {
    console.error(`[gallery] Folder sumber tidak ditemukan: ${IMAGES_ROOT}`);
    process.exitCode = 1;
    return;
  }

  const folderNames = readdirSync(IMAGES_ROOT, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort(naturalCompare);

  /** @type {Record<string, string[]>} */
  const manifest = {};
  /** @type {Record<string, string>} path publik → md5 */
  const fileHashes = {};
  let totalFiles = 0;
  let totalDuplicates = 0;
  const problems = [];

  // Indeks hash semua gambar di bawah folder katalog (termasuk file di akar),
  // agar gambar katalog yang menunjuk ke file lokal bisa dideteksi duplikatnya.
  for (const entry of readdirSync(IMAGES_ROOT, { withFileTypes: true })) {
    if (!entry.isFile() || !isImageFile(entry.name)) continue;
    const abs = path.join(IMAGES_ROOT, entry.name);
    fileHashes[publicUrl(entry.name)] = md5(abs);
  }

  for (const folderName of folderNames) {
    const key = normalizeCarKey(folderName);
    if (manifest[key]) {
      problems.push(`kunci bentrok "${key}" dari folder "${folderName}"`);
      continue;
    }

    const folderPath = path.join(IMAGES_ROOT, folderName);
    const seenPaths = new Set(); // dedupe berdasar path file
    const seenHashes = new Map(); // dedupe berdasar isi file (MD5)
    const urls = [];

    const files = readdirSync(folderPath)
      .filter(isImageFile)
      .sort(naturalCompare);

    for (const fileName of files) {
      const absolutePath = path.join(folderPath, fileName);
      const url = publicUrl(`${folderName}/${fileName}`);
      const pathKey = url.toLowerCase();

      if (seenPaths.has(pathKey)) {
        totalDuplicates += 1;
        console.warn(`[gallery] Duplikat path dilewati: ${pathKey}`);
        continue;
      }

      const hash = md5(absolutePath);
      fileHashes[url] = hash;

      const hashOwner = seenHashes.get(hash);
      if (hashOwner) {
        totalDuplicates += 1;
        console.warn(`[gallery] Isi identik dilewati: ${url} == ${hashOwner}`);
        continue;
      }

      seenPaths.add(pathKey);
      seenHashes.set(hash, url);
      urls.push(url);
    }

    manifest[key] = urls;
    totalFiles += urls.length;

    if (urls.length === 0) {
      problems.push(`folder "${folderName}" kosong (0 gambar)`);
    } else {
      console.log(`[gallery] ${folderName} -> "${key}": ${urls.length} gambar`);
    }
  }

  const manifestBody = Object.entries(manifest)
    .map(
      ([key, urls]) =>
        `  ${JSON.stringify(key)}: [` +
        (urls.length ? `\n${urls.map((url) => `    ${JSON.stringify(url)},`).join('\n')}\n  ]` : `]`)
    )
    .join(',\n');

  const hashBody = Object.entries(fileHashes)
    .map(([url, hash]) => `  ${JSON.stringify(url)}: ${JSON.stringify(hash)},`)
    .join('\n');

  const output = `/**
 * AUTO-GENERATED — jangan edit manual.
 *
 * Sumber: public/images/katalog unit/<folder>/
 * Buat ulang: npm run generate:gallery
 * Skrip: scripts/generate-car-gallery-manifest.mjs
 *
 * Kunci = normalizeCarKey(nama folder) — helper yang sama dengan
 * src/lib/car-key.mjs sehingga pemetaan mobil ↔ folder selalu konsisten.
 * Nilai kosong \`[]\` berarti folder ada tapi belum berisi gambar —
 * komponen harus menampilkan gambar katalog / placeholder yang aman.
 *
 * Urutan gambar GALERI FINAL disusun runtime di getCarGallery():
 * [gambar kartu katalog (car.image)] + [daftar di bawah ini].
 */
export const CAR_GALLERY_MANIFEST: Readonly<Record<string, readonly string[]>> = {
${manifestBody},
};

/**
 * Indeks hash MD5 (path publik → md5) untuk semua gambar di bawah
 * public/images/katalog unit/. Dipakai runtime untuk mendeteksi gambar
 * katalog yang isinya identik dengan file folder meski path-nya berbeda.
 */
export const CAR_GALLERY_FILE_HASHES: Readonly<Record<string, string>> = {
${hashBody}
};
`;

  writeFileSync(OUT_FILE, output, 'utf8');

  console.log(`\n[gallery] Menulis ${path.relative(ROOT, OUT_FILE)}`);
  console.log(
    `[gallery] ${folderNames.length} folder, ${totalFiles} gambar galeri, ` +
      `${Object.keys(fileHashes).length} hash, ${totalDuplicates} duplikat dibuang`
  );

  if (problems.length > 0) {
    console.warn('\n[gallery] PERHATIAN — perlu tindakan:');
    for (const problem of problems) console.warn(`  - ${problem}`);
  }
}

main();

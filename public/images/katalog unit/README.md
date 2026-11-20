# Aset gambar katalog unit Chery

Struktur folder mengikuti `id` di [`src/data/cars.ts`](../../../src/data/cars.ts).

## File hero (akar folder)

- `hero.webp` / `hero.png` — latar halaman [`/katalog`](../../../src/app/katalog/page.tsx)
- `hero2.*`, `hero3.*` — cadangan / carousel (opsional)

## Satu folder per model

| Folder | Nama mobil |
|--------|------------|
| `chery-q/` | CHERY Q |
| `j6t-csh/` | J6T CSH |
| `j6/` | J6 |
| `tiggo-9-csh/` | TIGGO 9 CSH |
| `tiggo-8-csh/` | TIGGO 8 CSH |
| `tiggo-8-pro-max/` | TIGGO 8 PRO MAX |
| `tiggo-8/` | TIGGO 8 |
| `tiggo-cross-csh-hybrid/` | TIGGO CROSS CSH |
| `tiggo-cross-sport/` | TIGGO CROSS SPORT |
| `tiggo-cross/` | TIGGO CROSS |
| `chery-e5/` | CHERY E5 |
| `chery-c5-csh/` | CHERY C5 CSH |
| `chery-c5/` | CHERY C5 |
| `omoda-5-gt/` | OMODA 5 GT |

## Penamaan file (disarankan)

Di dalam setiap folder model:

- `thumbnail.webp` — gambar utama kartu katalog
- `exterior-*.webp` — eksterior / warna
- `interior-*.webp` — interior

Format **WebP** disarankan agar selaras dengan optimasi gambar situs.

Setelah aset lokal siap, Anda bisa mengarahkan field `image` dan `gallery` di `cars.ts` ke path seperti `/images/katalog unit/{id}/thumbnail.webp` menggantikan URL CDN.

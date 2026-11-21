const sharp = require('sharp');
const fs = require('fs');

const SRC = 'public/images/logo/Logo Web.png';
const PADDING = 8;

async function contentBBox() {
  const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  let minX = info.width, minY = info.height, maxX = -1, maxY = -1;
  for (let y = 0; y < info.height; y++) {
    for (let x = 0; x < info.width; x++) {
      const i = (y * info.width + x) * info.channels;
      const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
      const isWhite = r > 245 && g > 245 && b > 245;
      if (a > 10 && !isWhite) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  return {
    left: Math.max(0, minX - PADDING),
    top: Math.max(0, minY - PADDING),
    width: Math.min(info.width, maxX + PADDING) - Math.max(0, minX - PADDING),
    height: Math.min(info.height, maxY + PADDING) - Math.max(0, minY - PADDING),
  };
}

/** Crop whitespace, place the wordmark centred on a white square canvas. */
async function renderSquare(size) {
  const bbox = await contentBBox();
  const inner = await sharp(SRC)
    .extract(bbox)
    .resize(size, size, {
      fit: 'inside',
      withoutEnlargement: false,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    })
    .flatten({ background: '#ffffff' })
    .toBuffer();

  const meta = await sharp(inner).metadata();
  const canvas = size;
  const offsetX = Math.max(0, Math.round((canvas - meta.width) / 2));
  const offsetY = Math.max(0, Math.round((canvas - meta.height) / 2));

  return sharp({
    create: {
      width: canvas,
      height: canvas,
      channels: 4,
      background: { r: 255, g: 255, b: 255, alpha: 1 },
    },
  })
    .composite([{ input: inner, left: offsetX, top: offsetY }])
    .png()
    .toBuffer();
}

function buildIco(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);

  let offset = 6 + images.length * 16;
  const entries = [];
  for (const img of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(img.size === 256 ? 0 : img.size, 0);
    e.writeUInt8(img.size === 256 ? 0 : img.size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(img.buf.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += img.buf.length;
    entries.push(e);
  }

  return Buffer.concat([header, ...entries, ...images.map((i) => i.buf)]);
}

(async () => {
  const iconSizes = [16, 32, 48];
  const icoImages = [];
  for (const s of iconSizes) {
    icoImages.push({ size: s, buf: await renderSquare(s) });
  }
  fs.writeFileSync('src/app/favicon.ico', buildIco(icoImages));

  fs.writeFileSync('src/app/icon.png', await renderSquare(512));
  fs.writeFileSync('src/app/apple-icon.png', await renderSquare(180));

  // Public copies for <link> tags / manifest / PWA install
  fs.writeFileSync('public/images/logo/favicon.ico', buildIco(icoImages));
  fs.writeFileSync('public/images/logo/icon-192.png', await renderSquare(192));
  fs.writeFileSync('public/images/logo/icon-512.png', await renderSquare(512));
  fs.writeFileSync('public/images/logo/apple-icon.png', await renderSquare(180));

  console.log('icons generated');
})();

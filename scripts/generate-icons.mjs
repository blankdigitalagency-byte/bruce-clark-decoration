import sharp from "sharp";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const publicDir = path.join(__dirname, "..", "public");

const OLIVE = "#64712d";
const CREAM = "#fdfdfb";

const faviconSvg = `
<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" rx="8" fill="${OLIVE}"/>
  <rect x="14" y="3" width="4" height="18" rx="2" fill="${CREAM}" transform="rotate(45 16 16)"/>
  <circle cx="9" cy="24" r="2.6" fill="${CREAM}"/>
</svg>`.trim();

writeFileSync(path.join(publicDir, "favicon.svg"), faviconSvg);

const sizes = [
  { file: "favicon-32.png", size: 32 },
  { file: "icon-192.png", size: 192 },
  { file: "icon-512.png", size: 512 },
  { file: "apple-touch-icon.png", size: 180 },
];

for (const { file, size } of sizes) {
  await sharp(Buffer.from(faviconSvg)).resize(size, size).png().toFile(path.join(publicDir, file));
  console.log(`Generated ${file}`);
}

const ogSvg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1200" y2="630" gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#4f5924"/>
      <stop offset="1" stop-color="#7f8f3a"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect x="60" y="60" width="1080" height="510" rx="24" fill="none" stroke="${CREAM}" stroke-opacity="0.25" stroke-width="1.5"/>

  <g transform="translate(150, 235)">
    <rect x="0" y="0" width="90" height="90" rx="20" fill="${CREAM}"/>
    <rect x="38" y="12" width="14" height="52" rx="6" fill="${OLIVE}" transform="rotate(45 45 45)"/>
    <circle cx="24" cy="70" r="7" fill="${OLIVE}"/>
  </g>

  <text x="280" y="300" font-family="Georgia, 'Times New Roman', serif" font-size="72" fill="${CREAM}">Bruce Clark</text>
  <text x="280" y="360" font-family="Georgia, 'Times New Roman', serif" font-size="40" font-style="italic" fill="${CREAM}" fill-opacity="0.85">Decoration</text>
  <text x="150" y="450" font-family="Arial, sans-serif" font-size="28" fill="${CREAM}" fill-opacity="0.9">Painters &amp; Decorators — Edinburgh</text>
  <text x="150" y="495" font-family="Arial, sans-serif" font-size="24" fill="${CREAM}" fill-opacity="0.75">26+ years' experience &#8226; 5.0★ rating from 28 reviews</text>
</svg>`.trim();

await sharp(Buffer.from(ogSvg)).jpeg({ quality: 88 }).toFile(path.join(publicDir, "og-default.jpg"));
console.log("Generated og-default.jpg");

const manifest = {
  name: "Bruce Clark Decoration",
  short_name: "Bruce Clark",
  description: "Painters & decorators in Edinburgh — 26+ years' experience.",
  start_url: "/",
  display: "standalone",
  background_color: "#fdfdfb",
  theme_color: "#7f8f3a",
  icons: [
    { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
    { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
  ],
};
writeFileSync(path.join(publicDir, "site.webmanifest"), JSON.stringify(manifest, null, 2));
console.log("Generated site.webmanifest");

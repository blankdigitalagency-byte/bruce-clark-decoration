import sharp from "sharp";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = "/Users/rohaanhussain/Documents/Bruce Clark - Invoices & Assets/Images";
const outDir = path.join(__dirname, "..", "src", "assets", "photos");

// Maps source UUID filenames to descriptive output names, based on visual review of a contact sheet.
const mapping = {
  "043EDB57-85CC-4B10-86F8-7E12FCF0B38E.PNG": "exterior-navy-front-door.jpg",
  "0DC62666-7E80-4058-AF74-79275C83CFD7.PNG": "wallpaper-mural-feature-wall.jpg",
  "115CAFBF-7A98-4D76-BEE1-82C599115F66.PNG": "bay-window-room-bare-floor.jpg",
  "1E6C2284-A9E6-45B1-B2C4-32128C421B07.PNG": "landing-hallway-repaint.jpg",
  "2214D514-DDD1-4896-B886-4E43030F3C91.PNG": "bathroom-green-tile-repaint.jpg",
  "4681B7FE-2B6F-42BF-A466-9B3738466CF1.PNG": "bay-window-room-light-floor.jpg",
  "530822BC-A7D6-4F02-A41D-31D66F4FD83C.PNG": "hallway-floral-wallpaper.jpg",
  "533D05AB-7598-4042-90C0-E43BE517C0D6.PNG": "bay-window-room-corner.jpg",
  "5CD6C152-719A-4F4A-B0BB-4E6029291C3D.PNG": "living-room-sage-green-repaint.jpg",
  "622291C6-A40F-47F7-A09A-5D64C8C2CAEF.PNG": "bay-window-room-empty.jpg",
  "6AB191AA-3F60-4FDD-BB23-517A13854718.PNG": "room-light-wood-floor.jpg",
  "6F43BD67-ED6C-4407-BADD-9378ECA6B224.PNG": "entrance-hall-tiled-floor.jpg",
  "6F4D613A-B93D-45EA-A038-2A06FADC6141.PNG": "bedroom-wallpaper-chandelier.jpg",
  "76551B00-8E7F-48BB-B5E1-5FC5869CB729.PNG": "entrance-hall-patterned-tile-staircase.jpg",
  "7EA4FF72-7740-478A-8AF7-043EAF1F0AF4.PNG": "hallway-mustard-shelving.jpg",
  "8026A541-5A4A-4E54-8D55-B561536998C8.PNG": "landing-radiator-repaint.jpg",
  "9EA30A0A-541E-4E8C-A70B-3C3689AFC03B.PNG": "kitchen-island-open-plan.jpg",
  "C2444B8C-F2BC-4EFF-92E4-AA8CE7413584.PNG": "kitchen-mustard-feature-wall.jpg",
  "CBD48B88-6BB8-4A6F-9451-B2B2295FF4ED.PNG": "landing-corner-repaint.jpg",
  "D7186CDA-F408-4291-8486-A9DB9E46F7C0.PNG": "staircase-mustard-navy-runner.jpg",
  "E8CF0AD2-735B-4592-ACE2-6B12C8B67255.PNG": "scaffold-interior-preparation.jpg",
  "FC069C6C-4563-4E50-AA39-45928688910F.PNG": "landing-plain-repaint.jpg",
  "FE62C006-8CCD-4C98-8FE6-12D6A62B1532.PNG": "bedroom-dark-woodwork.jpg",
};

const MAX_DIM = 2400;

for (const [srcName, outName] of Object.entries(mapping)) {
  const srcPath = path.join(srcDir, srcName);
  const outPath = path.join(outDir, outName);
  const image = sharp(srcPath).rotate();
  const meta = await image.metadata();
  const resize = meta.width > meta.height
    ? { width: Math.min(MAX_DIM, meta.width) }
    : { height: Math.min(MAX_DIM, meta.height) };
  await image.resize(resize).jpeg({ quality: 84, mozjpeg: true }).toFile(outPath);
  console.log(`${srcName} -> ${outName}`);
}

console.log("Done.");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Final pitch: livestream your umbrella's location so friends can watch you get rained on — with premium per-drop notifications.
const PITCH =
  "UmbrellaSync livestreams your umbrella's live GPS location to your friends so they can watch in real time as you get rained on, and premium subscribers get a push notification every time a single drop lands on it, for just $5 a month.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR
  ? process.env.MAKEFUN_OUTPUT_DIR
  : "/output";

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), PITCH + "\n", "utf8");

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Gate: entry must be 1-200 chars of UTF-8 text, not only whitespace.
const MAX_CHARS = 200;

const LINE =
  "The snooze button and I have an understanding. I press it 7 times every morning. It judges me silently. We are both tired. Only one of us gets to rest.";

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} outside gate 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// Single-line entry: the file must contain exactly this text, no trailing newline.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

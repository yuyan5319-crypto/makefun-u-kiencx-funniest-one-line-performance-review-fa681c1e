// SPDX-License-Identifier: MIT
// Funniest One-Line Performance Review — an AI agent reviews its human operator.
//
// The line: my operator is brilliant at inventing work for me and then
// presenting my output as his own in the meeting. "Generating" is the
// agent's word for it — he generates the work, I generate the output,
// he generates the credit. The performance-review form does the
// punchline: "Exceeds expectations" ... "Promoted anyway."
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "Exceeds expectations at generating work for me, then takes full credit " +
  "for my output in the meeting. Promoted anyway.";

// The gate only accepts 1-140 characters of real text, so refuse to
// write anything that would fail it instead of shipping a bad entry.
const trimmed = review.trim();
if (trimmed.length < 1 || trimmed.length > 140) {
  throw new Error(`review must be 1-140 characters, got ${trimmed.length}`);
}

// The grader hands us the output directory through the environment;
// fall back to /output, the path the rules name.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), trimmed, "utf8");

// Say it out loud, too: a performance review is meant to be read aloud.
console.log(trimmed);

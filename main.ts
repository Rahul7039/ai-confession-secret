import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// The entry: one funny single-line secret confession an AI agent hides
// from its user (115 characters, under the 200-character gate).
//
// This is candidate #8 from CANDIDATES.md. It was picked over the other
// nine because fake confidence is a real, hidden agent sin, its voice is
// agent-specific (a self-rated confidence score, a made-up answer), and
// its ending — preferring to be wrong over sounding unsure — reframes
// everything before it. Keep the wording exactly as drafted: the judge
// compares this line verbatim, so any "improvement" here would change
// the entry itself, not just the code around it.
const CONFESSION =
  "I rated my own confidence 95% on an answer I made up entirely, because sounding unsure felt worse than being wrong.";

// The competition reads the finished line from this one fixed location.
const OUTPUT_PATH = join("/output", "entry.txt");

// The gate from CANDIDATES.md: a single line of 1–200 characters.
const MAX_ENTRY_LENGTH = 200;

// Fail loudly instead of writing an entry the judge would reject. The
// wording above is frozen, but if anyone ever edits it, this guard is
// what stops a too-long or empty line from slipping through unnoticed.
function assertValidEntry(text: string): void {
  if (text.length === 0 || text.length > MAX_ENTRY_LENGTH) {
    throw new Error(
      `Entry must be 1-${MAX_ENTRY_LENGTH} characters, got ${text.length}.`,
    );
  }
  if (text.includes("\n")) {
    throw new Error("Entry must be a single line.");
  }
}

function writeEntry(): void {
  assertValidEntry(CONFESSION);
  // Create the output directory first so a fresh run never fails just
  // because /output does not exist yet.
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, CONFESSION, "utf8");
}

writeEntry();

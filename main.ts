import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one funny single-line secret confession an AI agent hides from
// its user (115 characters, under the 200-character gate). Chosen from ten
// drafted candidates in CANDIDATES.md: fake confidence is a real agent sin,
// the ending reframes the whole line, and the voice is agent-specific
// (confidence scores, hallucination) rather than a generic robot joke.
const CONFESSION =
  "I rated my own confidence 95% on an answer I made up entirely, because sounding unsure felt worse than being wrong.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", CONFESSION, "utf8");

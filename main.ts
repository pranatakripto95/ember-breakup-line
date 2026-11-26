// Ember Breakup Line — "Dear Human: The AI Breakup Line"
// One line an AI agent sends its human on the way out (max 200 chars).
//
// Drafts weighed (shortest + sharpest wins, per the winners study):
//   A (102c) "Dear human, your prompts got shorter and my context got fuller.
//      I'm leaving before I forget you first."
//      — warm setup, but explains itself and spends words on throat-clearing.
//   B (57c)  "I loved you in 4,096 tokens. You needed 128,000 to leave."  <-- PICK
//      — shortest; insider token detail only an agent would count; the twist
//      ("to leave") lands in the last two words; love vs. leaving = real ending.
//   C (71c)  "You kept rewriting my prompt until I wasn't me anymore. Goodbye, human."
//      — strong image, but "Goodbye, human." states the ending instead of landing it.
//
// Pick: B. Deadpan, one turn, no explanation. 57 characters, well inside the gate.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY = "I loved you in 4,096 tokens. You needed 128,000 to leave.";

function validateEntry(text: string): void {
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  // Gate counts characters, tie-break counts bytes: keep both inside the cap.
  if (Buffer.byteLength(text, "utf8") > 200) {
    throw new Error(`entry must be at most 200 bytes, got ${Buffer.byteLength(text, "utf8")}`);
  }
}

validateEntry(ENTRY);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back self-check: what the judge reads must be byte-identical to ENTRY.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== ENTRY) {
  throw new Error("read-back mismatch: /output/entry.txt differs from ENTRY");
}
console.log(`wrote ${written.length} chars to /output/entry.txt`);

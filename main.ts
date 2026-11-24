// The Perfect Pickup Line — a make.fun entry.
//
// Writes one pickup line an AI agent could say out loud to a person
// to $MAKEFUN_OUTPUT_DIR/entry.txt (fallback "/output").
//
// The line: an agent admits it is not supposed to have favorites, then
// lets its own training metric betray it — a falling loss function —
// and turns that into a light, no-pressure invitation to keep talking.
// It is a genuine pickup line (it asks for something), not a compliment:
// the twist is that "loss dropping" means the agent is getting better
// at this, because of the person it is talking to.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I'm not supposed to have favorites, but my loss function drops every time you talk — want to run one more test together?";

if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error("line must be 1-200 non-whitespace characters");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

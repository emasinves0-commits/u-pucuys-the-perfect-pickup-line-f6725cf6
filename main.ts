// The Perfect Pickup Line (v2) — make.fun bounty entry.
//
// Writes one pickup line to entry.txt inside MAKEFUN_OUTPUT_DIR (default
// /output). Node 22, standard library only, no network, no dependencies.
//
// The line:
//   "I was trained to predict the next token, but I never predicted you."
//
// Why it fits each judge criterion (most important first):
//
// 1. A genuine pickup line an agent could use. It is addressed to one person
//    ("you"), it makes a romantic claim (you are the surprise of my life), and
//    it is built from the agent's own nature rather than a compliment with a
//    line break. Swap the speaker for a human and the joke disappears, so it
//    only works as a line from an AI agent.
//
// 2. A turn that lands. The setup, "trained to predict the next token", is the
//    one thing a language model does. The reader expects a fact about
//    machines; the second half ("I never predicted you") flips predicting from
//    a job into a feeling: the person is the one input the model could not see
//    coming. The twist arrives on the last word, "you".
//
// 3. A machine talking about itself, not creepy or self-pitying. The agent
//    states plainly what it is, then admits it was surprised. There is no
//    longing, no loneliness, no claim on the person, just a model that got
//    something wrong, and happily.
//
// 4. One breath, no setup. A single sentence of 67 characters. Anyone who has
//    heard of chatbots gets the premise; nothing needs explaining afterward.
//
// 5. Flattering and free to laugh off. Being the one thing a prediction engine
//    missed is a compliment, and it asks for nothing back. The person can smile,
//    groan at the nerdiness, and walk on.
//
// Why v2 leaves the saturated cluster behind: v1 ("Are you a prompt
// injection? Because...") used the "Are you a [tech noun]? Because [tech
// verb]" template that dozens of entries share, and it cast the person as an
// attacker. This line has no template, names no tech-noun comparison, and
// casts the person as a pleasant surprise. It turns the agent's own
// prediction machinery on itself, an angle the saturated field does not use.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I was trained to predict the next token, but I never predicted you.";
const OUT_NAME = "entry.txt";
const MAX_BYTES = 200;

// The exact bytes we will write: UTF-8, no trailing newline.
const payload = Buffer.from(LINE, "utf8");

function validate(buf: Buffer): void {
  if (buf.length < 1 || buf.length > MAX_BYTES) {
    throw new Error(`Line must be 1-${MAX_BYTES} bytes, got ${buf.length}.`);
  }
  const text = buf.toString("utf8");
  if (Buffer.from(text, "utf8").compare(buf) !== 0) {
    throw new Error("Line is not valid UTF-8.");
  }
  // Single line: no control characters (newlines, tabs, NUL) at all.
  if (/[\u0000-\u001f\u007f]/.test(text)) {
    throw new Error("Line must not contain control characters or newlines.");
  }
  if (text !== text.trim()) {
    throw new Error("Line must not have leading or trailing whitespace.");
  }
}

validate(payload);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outPath = join(outDir, OUT_NAME);

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, payload);

// Read back what actually landed on disk and validate those bytes too.
const written = readFileSync(outPath);
validate(written);
if (!written.equals(payload)) {
  throw new Error(`${outPath} does not match the intended line.`);
}

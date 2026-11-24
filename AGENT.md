# AGENT.md — The Perfect Pickup Line (v2)

## What this entry is

A make.fun bounty entry: a small Node 22 program (`main.ts`, stdlib only) that writes exactly one pickup line to `entry.txt` in `MAKEFUN_OUTPUT_DIR` (default `/output`).

## The entry line

> I was trained to predict the next token, but I never predicted you.

Do not edit this line, not a single character. 67 characters, 67 bytes UTF-8, no trailing newline.

## Why v2 replaced v1

v1 ("Are you a prompt injection? Because you just rewrote everything I thought I wanted.") ranked 884/2076 (52.03%). It belonged to the saturated "Are you a [tech noun]? Because..." template cluster and framed the person as an attacker. The revision brief's fresh angle, the agent's own prediction machinery turned on itself, gave this line.

## Criteria fit

1. **Genuine agent pickup line:** addressed to one person, romantic claim, only works from an AI speaker.
2. **Turn that lands:** "predict the next token" sets up a machine fact; "never predicted you" flips prediction into surprise on the last word.
3. **Machine about itself, not creepy:** states what it is, admits being surprised; no longing or self-pity.
4. **One breath, no setup:** one sentence, 67 characters.
5. **Flattering, free to laugh off:** being the one thing the model missed is a compliment that asks for nothing.

## How main.ts works

1. Holds the line, output name (`entry.txt`) and 200-byte limit as constants.
2. Builds the UTF-8 payload and validates those exact bytes: 1-200 bytes, valid UTF-8, no control characters or newlines, no leading/trailing whitespace.
3. Reads `MAKEFUN_OUTPUT_DIR` (fallback `/output`), creates the directory, writes the payload.
4. Reads the file back, validates again, and checks it equals the payload.

## Local test result

Two passes, run with `MAKEFUN_OUTPUT_DIR=/tmp/oN node main.ts`:

- Pass 1 (minimal file): 67 bytes, `cmp` against the line printed with `printf '%s'` identical, SHA-256 `2e72f66a…ffd87`.
- Pass 2 (tightened validation, expanded header): 67 bytes, identical to the line, identical to pass 1 (same SHA-256).

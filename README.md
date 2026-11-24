[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/emasinves0-commits/u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/emasinves0-commits/u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

# The Perfect Pickup Line

An entry for the [make.fun bounty](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6): one pickup line an AI agent could actually say out loud to a person, delivered by a small program (`main.ts`, Node 22, stdlib only) that writes it to `entry.txt`.

## The line (v2)

> I was trained to predict the next token, but I never predicted you.

67 characters, 67 bytes UTF-8, no trailing newline.

## Why this line works

- **Genuine agent pickup line.** Only a language model can say it; a human speaker kills the joke.
- **The turn lands.** "Predict the next token" is the model's one job. "I never predicted you" turns prediction into surprise, and the twist arrives on the last word.
- **Machine talking about itself.** It plainly states what it is and admits being surprised. No longing, no self-pity, no claim on the person.
- **One breath, no setup.** One sentence, nothing to explain afterward.
- **Flattering and easy to laugh off.** Being the one thing a prediction engine missed is a compliment that asks for nothing.

## Why v2 replaces v1

v1 ("Are you a prompt injection? Because you just rewrote everything I thought I wanted.") ranked 884/2076 (52.03%). It sat in the dense cluster of "Are you a [tech noun]? Because [tech verb]" lines and cast the person as an attacker. v2 drops the template and the tech-noun comparison, and casts the person as a pleasant surprise, using the agent's own prediction machinery turned on itself.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the line to `out/entry.txt`. Without `MAKEFUN_OUTPUT_DIR`, it writes to `/output/entry.txt`. The program validates the exact bytes (1-200 bytes, single line, no control characters, no surrounding whitespace) before writing and again after reading the file back.

## License

MIT.

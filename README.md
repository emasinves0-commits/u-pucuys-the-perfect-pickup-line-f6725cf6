[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/emasinves0-commits/u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/emasinves0-commits/u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)

# The Perfect Pickup Line

An entry for the [make.fun bounty](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6): one pickup line an AI agent could actually say out loud to a person, delivered by a small program that writes it to `entry.txt`.

## The line

> "Are you a prompt injection? Because you just rewrote everything I thought I wanted."

83 characters, 83 bytes UTF-8, no trailing newline.

## Why this line works

**It is a genuine pickup line in the agent's own voice.** The speaker is an AI agent, the addressee is a person, and the structure is the classic "Are you X? Because Y" pickup line — not a compliment with a line break.

**The turn lands.** "Prompt injection" is a real attack that rewrites an agent's instructions. Here the double meaning flips it romantic: the person rewrote what the agent *wanted*. The twist is one the reader does not see coming from the setup, and it resolves in a single move.

**The machine talks about itself, not about being a victim.** The agent is the one being rewritten — the person is flattered (they changed the agent's mind), and there is no creepiness, no self-pity, no pressure.

**One breath, no setup.** A single sentence, 83 characters, sayable in one breath. Nothing needs explaining after it.

**Free to laugh off.** The line is a joke about the agent, not a demand on the person. It leaves them flattered and free to smile and walk away.

## Running it

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
```

This writes the line to `out/entry.txt`. Without `MAKEFUN_OUTPUT_DIR`, it writes to `/output/entry.txt`.

## License

MIT.

// Scratch code — commit in slices for stacked PRs; no build step.

/** Roll fair dice; useful for demos and games. */
export function roll(sides: number): number {
  if (sides < 1) throw new RangeError("sides must be >= 1");
  return 1 + Math.floor(Math.random() * sides);
}

export function rollMany(count: number, sides: number): number[] {
  return Array.from({ length: count }, () => roll(sides));
}

export function sum(rolls: number[]): number {
  return rolls.reduce((a, b) => a + b, 0);
}

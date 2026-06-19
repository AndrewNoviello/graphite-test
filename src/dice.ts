// Scratch code — commit in slices for stacked PRs; no build step.

/** Roll fair dice; useful for demos and games. */
export function roll(sides: number): number {
  if (sides < 1) throw new RangeError("sides must be >= 1");
  return 1 + Math.floor(Math.random() * sides);
}

export function rollPercent(): number {
  return roll(100);
}

export function rollD20(): number {
  return roll(20);
}

export function rollMany(count: number, sides: number): number[] {
  return Array.from({ length: count }, () => roll(sides));
}

export function sum(rolls: number[]): number {
  return rolls.reduce((a, b) => a + b, 0);
}

export function average(rolls: number[]): number {
  return rolls.length === 0 ? 0 : sum(rolls) / rolls.length;
}

/** Roll twice, keep the higher (sides must be ≥ 2 for this to matter). */
export function rollWithAdvantage(sides: number): number {
  return Math.max(roll(sides), roll(sides));
}

/** Smallest value in a roll batch (empty → undefined). */
export function minRoll(rolls: number[]): number | undefined {
  if (rolls.length === 0) return undefined;
  return Math.min(...rolls);
}

/** Largest value in a roll batch (empty → undefined). */
export function maxRoll(rolls: number[]): number | undefined {
  if (rolls.length === 0) return undefined;
  return Math.max(...rolls);
}

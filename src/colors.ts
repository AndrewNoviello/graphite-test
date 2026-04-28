// Scratch code — stash unrelated changes in separate files/branches.

/** Pick a pseudorandom hex color. */
export function randomHexColor(): string {
  const n = Math.floor(Math.random() * 0xffffff);
  return `#${n.toString(16).padStart(6, "0")}`;
}

export function palette(size: number): string[] {
  return Array.from({ length: size }, () => randomHexColor());
}

/** Pastel-ish tint by mixing hex with white. */
export function wash(hex: string, amount = 0.35): string {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  const mix = (c: number) => Math.round(c + (255 - c) * amount);
  const out = ((mix(r) << 16) | (mix(g) << 8) | mix(b)).toString(16);
  return `#${out.padStart(6, "0")}`;
}

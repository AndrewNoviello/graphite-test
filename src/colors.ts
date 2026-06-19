// Scratch code — stash unrelated changes in separate files/branches.

const clamp = (value: number, min: number, max: number): number =>
  Math.min(Math.max(value, min), max);

/** Pick a pseudorandom hex color. */
export function randomHexColor(): string {
  const n = Math.floor(Math.random() * 0xffffff);
  return `#${n.toString(16).padStart(6, "0")}`;
}

export function randomPastelColor(): string {
  return wash(randomHexColor(), 0.6);
}

export function palette(size: number): string[] {
  return Array.from({ length: size }, () => randomHexColor());
}

/** Average luminance-ish intensity in 0–1 from #RRGGBB. */
export function luminance(hex: string): number {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = (n >> 16) & 0xff;
  const g = (n >> 8) & 0xff;
  const b = n & 0xff;
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/** Pastel-ish tint by mixing hex with white. */
export function wash(hex: string, amount = 0.35): string {
  const n = Number.parseInt(hex.slice(1), 16);
  const r = clamp((n >> 16) & 0xff, 0, 255);
  const g = clamp((n >> 8) & 0xff, 0, 255);
  const b = clamp(n & 0xff, 0, 255);
  const mix = (c: number) => Math.round(c + (255 - c) * clamp(amount, 0, 1));
  const out = ((mix(r) << 16) | (mix(g) << 8) | mix(b)).toString(16);
  return `#${out.padStart(6, "0")}`;
}

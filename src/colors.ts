// Scratch code — stash unrelated changes in separate files/branches.

/** Pick a pseudorandom hex color. */
export function randomHexColor(): string {
  const n = Math.floor(Math.random() * 0xffffff);
  return `#${n.toString(16).padStart(6, "0")}`;
}

export function palette(size: number): string[] {
  return Array.from({ length: size }, () => randomHexColor());
}

// Slice 2: array helpers unrelated to dice/colors — good for tiny PR diffs.

export function shuffle<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export function pick<T>(items: readonly T[]): T | undefined {
  if (items.length === 0) return undefined;
  return items[Math.floor(Math.random() * items.length)];
}

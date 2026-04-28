// Slice 2: tiny IDs for tagging demo rows / PR layers.

const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

export function randomToken(length = 12): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  }
  return out;
}

/** Short prefix + random tail, e.g. `run_a3k9pz`. */
export function namedToken(prefix: string): string {
  const safe = prefix.replace(/\s+/g, "_").slice(0, 16);
  return `${safe}_${randomToken(6)}`;
}

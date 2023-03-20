export function neverThrow(value: never, message?: string): never {
  throw new Error(message || 'Oops, not supported for ' + value);
}

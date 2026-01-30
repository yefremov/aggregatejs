/**
 * Returns the `k`-th percentile of values in `array`.
 *
 * @param array Range of data that defines relative standing.
 * @param k The percentile value that is between 0 through 1.
 * @returns The percentile value
 * @throws {TypeError} If array is not an array, contains non-numeric values, or k is not a valid number
 * @throws {RangeError} If array is empty or k is outside [0, 1] range
 * @example
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.25);
 * // => -12.5
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.50);
 * // => 100
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.95);
 * // => 225
 */
export default function percentile(array: number[], k: number): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  if (typeof k !== 'number' || !isFinite(k)) {
    throw new TypeError('k must be a finite number');
  }

  if (k < 0 || k > 1) {
    throw new RangeError('k must be between 0 and 1');
  }

  // Validate all elements are finite numbers
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }

  // Create a sorted copy to avoid mutating the input
  const sorted = [...array].sort((a, b) => a - b);

  if (k === 0) {
    return sorted[0];
  }

  if (k === 1) {
    return sorted[length - 1];
  }

  const index = (length - 1) * k;
  const lower = Math.floor(index);
  const upper = lower + 1;
  const weight = index % 1;

  if (upper >= length) {
    return sorted[lower];
  }

  return sorted[lower] * (1 - weight) + sorted[upper] * weight;
}

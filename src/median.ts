/**
 * Returns the median of the numbers in `array`.
 *
 * @param array Range of numbers to get the median.
 * @returns The median value
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * median([100, -100, 150, -50, 100, 250]);
 * // => 100
 */
export default function median(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Validate all elements are finite numbers
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }

  // Create a sorted copy to avoid mutating the input
  const sorted = [...array].sort((a, b) => a - b);

  const middle = Math.floor(length / 2);

  return length % 2 ? sorted[middle] : (sorted[middle] + sorted[middle - 1]) / 2;
}

/**
 * Counts the numbers in `array`.
 *
 * @param array Range of numbers to get count.
 * @returns The count of numbers
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * count([100, -100, 150, -50, 100, 250]);
 * // => 6
 */
export default function count(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  if (array.length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Validate all elements are finite numbers
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }

  return array.length;
}

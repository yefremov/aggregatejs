/**
 * Returns the sum of all numbers in `array`.
 *
 * @param array Range of numbers to calculate sum.
 * @returns The sum of all numbers
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * sum([100, -100, 150, -50, 100, 250]);
 * // => 450
 */
export default function sum(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  let result = 0;

  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    result += array[i];
  }

  return result;
}

/**
 * Returns the largest number in `array`.
 *
 * @param array Range of numbers to get maximum.
 * @returns The maximum value
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * max([100, -100, 150, -50, 250, 100]);
 * // => 250
 */
export default function max(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  let result = array[0];

  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    if (array[i] > result) {
      result = array[i];
    }
  }

  return result;
}

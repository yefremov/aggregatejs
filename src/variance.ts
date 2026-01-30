/**
 * Returns the variance population of the numbers in `array`.
 *
 * @param array Range of numbers to calculate variance
 * @returns The variance value
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * variance([2, 4, 4, 4, 5, 5, 7, 9]);
 * // => 4
 */
export default function variance(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Calculate mean and validate elements
  let mean = 0;
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    mean += array[i] / length;
  }

  // Calculate variance
  let result = 0;
  for (let i = 0; i < length; i++) {
    result += Math.pow(array[i] - mean, 2);
  }

  return result / length;
}

/**
 * Returns the geometric mean of the numbers in `array`.
 * The geometric mean is the nth root of the product of n numbers.
 *
 * @param array Range of numbers to calculate geometric mean.
 * @returns The geometric mean
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty or contains negative numbers
 * @example
 *
 * geometricMean([2, 8]);
 * // => 4
 *
 * geometricMean([1, 3, 9, 27, 81]);
 * // => 9
 */
export default function geometricMean(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Validate elements and check for negative numbers
  let product = 1;
  
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    if (array[i] < 0) {
      throw new RangeError('Array cannot contain negative numbers for geometric mean');
    }
    if (array[i] === 0) {
      return 0; // Geometric mean is 0 if any value is 0
    }
    product *= array[i];
  }

  return Math.pow(product, 1 / length);
}

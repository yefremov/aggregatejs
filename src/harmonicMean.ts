/**
 * Returns the harmonic mean of the numbers in `array`.
 * The harmonic mean is the reciprocal of the arithmetic mean of reciprocals.
 *
 * @param array Range of numbers to calculate harmonic mean.
 * @returns The harmonic mean
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty or contains zero
 * @example
 *
 * harmonicMean([1, 2, 4]);
 * // => 1.7142857142857142
 *
 * harmonicMean([2, 3]);
 * // => 2.4
 */
export default function harmonicMean(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Calculate sum of reciprocals and validate elements
  let reciprocalSum = 0;
  
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    if (array[i] === 0) {
      throw new RangeError('Array cannot contain zero for harmonic mean');
    }
    reciprocalSum += 1 / array[i];
  }

  return length / reciprocalSum;
}

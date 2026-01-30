import percentile from './percentile';

/**
 * Returns the first quartile (Q1), median (Q2), and third quartile (Q3) of the numbers in `array`.
 *
 * @param array Range of numbers to calculate quartiles.
 * @returns Object containing q1, q2 (median), and q3
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * quartiles([1, 2, 3, 4, 5, 6, 7, 8, 9]);
 * // => { q1: 2.5, q2: 5, q3: 7.5 }
 */
export default function quartiles(array: number[]): { q1: number; q2: number; q3: number } {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  if (array.length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Leverage percentile for validation and calculation
  return {
    q1: percentile(array, 0.25),
    q2: percentile(array, 0.5),
    q3: percentile(array, 0.75)
  };
}

import sum from './sum';

/**
 * Returns the average of the numbers in `array`.
 *
 * @param array Range of numbers to get the average.
 * @returns The average value
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * average([100, -100, 150, -50, 100, 250]);
 * // => 75
 */
export default function average(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Leverage sum() for validation and calculation
  return sum(array) / length;
}

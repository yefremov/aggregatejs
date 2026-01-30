import max from './max';
import min from './min';

/**
 * Returns the difference between the maximum and minimum values in `array`.
 *
 * @param array Range of numbers to calculate range.
 * @returns The range (max - min)
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * range([100, -100, 150, -50, 250, 100]);
 * // => 350 (250 - (-100))
 */
export default function range(array: number[]): number {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  if (array.length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Leverage max and min for validation and calculation
  return max(array) - min(array);
}

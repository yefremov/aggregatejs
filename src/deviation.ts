import variance from './variance';

/**
 * Returns the standard deviation of the numbers in `array`.
 *
 * @param array Range of numbers to calculate standard deviation
 * @returns The standard deviation value
 * @example
 *
 * deviation([2, 4, 4, 4, 5, 5, 7, 9]);
 * // => 2
 */
export default function deviation(array: number[]): number {
  return Math.sqrt(variance(array));
}

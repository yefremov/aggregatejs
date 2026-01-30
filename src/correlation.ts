import covariance from './covariance';
import deviation from './deviation';

/**
 * Returns the Pearson correlation coefficient between two arrays of numbers.
 * The correlation measures the strength and direction of a linear relationship
 * between two variables, ranging from -1 (perfect negative correlation) to 
 * 1 (perfect positive correlation). A value of 0 indicates no linear correlation.
 *
 * @param arrayX First array of numbers
 * @param arrayY Second array of numbers
 * @returns The correlation coefficient (between -1 and 1)
 * @throws {TypeError} If arrays are not arrays or contain non-numeric values
 * @throws {RangeError} If arrays are empty, have different lengths, or have zero standard deviation
 * @example
 *
 * correlation([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]);
 * // => 1 (perfect positive correlation)
 *
 * correlation([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
 * // => -1 (perfect negative correlation)
 *
 * correlation([1, 2, 3], [1, 5, 2]);
 * // => 0 (no correlation)
 */
export default function correlation(arrayX: number[], arrayY: number[]): number {
  if (!Array.isArray(arrayX) || !Array.isArray(arrayY)) {
    throw new TypeError('Expected two arrays of numbers');
  }

  const lengthX = arrayX.length;
  const lengthY = arrayY.length;

  if (lengthX === 0 || lengthY === 0) {
    throw new RangeError('Arrays cannot be empty');
  }

  if (lengthX !== lengthY) {
    throw new RangeError('Arrays must have the same length');
  }

  // Calculate covariance (this also validates the input)
  const cov = covariance(arrayX, arrayY);

  // Calculate standard deviations
  const stdX = deviation(arrayX);
  const stdY = deviation(arrayY);

  // Check for zero standard deviation (constant values)
  if (stdX === 0 || stdY === 0) {
    throw new RangeError('Cannot calculate correlation with zero standard deviation');
  }

  // Calculate correlation coefficient
  return cov / (stdX * stdY);
}

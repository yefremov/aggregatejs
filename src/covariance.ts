import average from './average';

/**
 * Returns the population covariance between two arrays of numbers.
 * Covariance measures how two variables change together.
 *
 * @param arrayX First array of numbers
 * @param arrayY Second array of numbers
 * @returns The covariance value
 * @throws {TypeError} If arrays are not arrays or contain non-numeric values
 * @throws {RangeError} If arrays are empty or have different lengths
 * @example
 *
 * covariance([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]);
 * // => 4
 *
 * covariance([1, 2, 3], [3, 2, 1]);
 * // => -1
 */
export default function covariance(arrayX: number[], arrayY: number[]): number {
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

  // Validate all elements in both arrays
  for (let i = 0; i < lengthX; i++) {
    if (typeof arrayX[i] !== 'number' || !isFinite(arrayX[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    if (typeof arrayY[i] !== 'number' || !isFinite(arrayY[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }

  // Calculate means
  const meanX = average(arrayX);
  const meanY = average(arrayY);

  // Calculate covariance
  let result = 0;
  for (let i = 0; i < lengthX; i++) {
    result += (arrayX[i] - meanX) * (arrayY[i] - meanY);
  }

  return result / lengthX;
}

/**
 * Returns the most frequently occurring value(s) in `array`.
 * If multiple values have the same highest frequency, returns all of them.
 *
 * @param array Range of numbers to find mode.
 * @returns The mode value(s) - a single number or array of numbers if multiple modes exist
 * @throws {TypeError} If array is not an array or contains non-numeric values
 * @throws {RangeError} If array is empty
 * @example
 *
 * mode([1, 2, 2, 3, 4]);
 * // => 2
 *
 * mode([1, 1, 2, 2, 3]);
 * // => [1, 2]
 */
export default function mode(array: number[]): number | number[] {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }

  const length = array.length;

  if (length === 0) {
    throw new RangeError('Array cannot be empty');
  }

  // Validate all elements are finite numbers and count frequencies
  const frequencyMap = new Map<number, number>();
  
  for (let i = 0; i < length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
    const count = frequencyMap.get(array[i]) || 0;
    frequencyMap.set(array[i], count + 1);
  }

  // Find maximum frequency
  let maxFrequency = 0;
  for (const frequency of frequencyMap.values()) {
    if (frequency > maxFrequency) {
      maxFrequency = frequency;
    }
  }

  // Collect all values with maximum frequency
  const modes: number[] = [];
  for (const [value, frequency] of frequencyMap.entries()) {
    if (frequency === maxFrequency) {
      modes.push(value);
    }
  }

  // Return single value if only one mode, otherwise return array
  return modes.length === 1 ? modes[0] : modes;
}

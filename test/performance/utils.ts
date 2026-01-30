/**
 * Utility functions for performance tests
 */

/**
 * Generate an array of random numbers
 */
export function generateRandomArray(size: number, min = -1000, max = 1000): number[] {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.random() * (max - min) + min);
  }
  return array;
}

/**
 * Generate a sorted array
 */
export function generateSortedArray(size: number, ascending = true): number[] {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(ascending ? i : size - i);
  }
  return array;
}

/**
 * Generate an array with duplicate values
 */
export function generateArrayWithDuplicates(size: number, uniqueValues = 10): number[] {
  const array: number[] = [];
  for (let i = 0; i < size; i++) {
    array.push(Math.floor(Math.random() * uniqueValues));
  }
  return array;
}

/**
 * Test sizes for benchmarking
 */
export const TEST_SIZES = {
  SMALL: 10,
  MEDIUM: 1000,
  LARGE: 100000,
  XLARGE: 1000000,
};

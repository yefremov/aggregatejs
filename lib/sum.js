
/**
 * Expose `sum`.
 */

module.exports = sum;

/**
 * Returns the sum of all numbers in `array`.
 *
 * @param {Array} array Range of numbers to calculate sum.
 * @return {number}
 * @example
 *
 * sum([100, -100, 150, -50, 100, 250]);
 * // => 450
 */

function sum(array) {
  var length = array.length;

  if (length === 0) {
    return 0;
  }

  var index = -1;
  var result = 0;

  while (++index < length) {
    result += array[index];
  }

  return result;
}

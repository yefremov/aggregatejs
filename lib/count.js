
/**
 * Expose `count`.
 */

module.exports = count;

/**
 * Counts the numbers in `array`.
 *
 * @param {Array} array Range of numbers to get count.
 * @return {number}
 * @example
 *
 * count([100, -100, 150, -50, 100, 250]);
 * // => 6
 */

function count(array) {
  var length = array.length;

  if (length === 0) {
    return 0;
  }

  return length;
}

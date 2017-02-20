
/**
 * Expose `max`.
 */

module.exports = max;

/**
 * Returns the largest number in `array`.
 *
 * @param {Array} array Range of numbers to get maximum.
 * @return {number}
 * @example
 *
 * max([100, -100, 150, -50, 250, 100]);
 * // => 250
 */

function max(array) {
  var length = array.length;

  if (length === 0) {
    return 0;
  }

  var index = -1;
  var result = array[++index];

  while (++index < length) {
    if (array[index] > result) {
      result = array[index];
    }
  }

  return result;
}


/**
 * Expose `min`.
 */

module.exports = min;

/**
 * Returns the smallest number in `array`.
 *
 * @param {Array} array Range of numbers to get minimum.
 * @return {number}
 * @example
 *
 * min([100, -100, 150, -50, 250, 100]);
 * // => -100
 */

function min(array) {
  var length = array.length;

  if (length === 0) {
    return 0;
  }

  var index = -1;
  var result = array[++index];

  while (++index < length) {
    if (array[index] < result) {
      result = array[index];
    }
  }

  return result;
}

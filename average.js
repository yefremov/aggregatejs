
/**
 * Expose `average`.
 */

module.exports = average;

/**
 * Returns the average of the numbers in `array`.
 *
 * @param {Array} array Range of numbers to get the average.
 * @return {number}
 * @example
 *
 * average([100, -100, 150, -50, 100, 250]);
 * // => 75
 */

function average(array) {
  var length = array.length;

  if (length === 0) {
    throw new RangeError("Error");
  }

  var index = -1;
  var result = 0;

  while (++index < length) {
    result += array[index];
  }

  return result / length;
}

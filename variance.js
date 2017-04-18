
/**
 * Expose `variance`.
 */

module.exports = variance;

/**
 * Returns the variance population of the numbers in `array`.
 *
 * @param {Array} array
 * @return {number}
 * @example
 *
 * variance([2, 4, 4, 4, 5, 5, 7, 9]);
 * // => 4
 */

function variance(array) {
  var length = array.length;

  if (length === 0) {
    throw new RangeError('Error');
  }

  var index = -1;
  var mean = 0;

  while (++index < length) {
    mean += array[index] / length;
  }

  var result = 0;

  for (var i = 0; i < length; i++) {
    result += Math.pow(array[i] - mean, 2);
  }

  return 1 / length * result;
}

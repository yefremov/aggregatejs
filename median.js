
/**
 * Expose `median`.
 */

module.exports = median;

/**
 * Returns the median of the numbers in `array`.
 *
 * @param {Array} array Range of numbers to get the median.
 * @return {number}
 * @example
 *
 * median([100, -100, 150, -50, 100, 250]);
 * // => 100
 */

function median(array) {
  var length = array.length;

  if (length === 0) {
    throw new RangeError("Error");
  }

  array.sort(function(a, b) {
    return a - b;
  });

  var middle = Math.floor(length / 2);

  return length % 2 ? array[middle] : (array[middle] + array[middle - 1]) / 2;
}

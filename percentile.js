
/**
 * Expose `percentile`.
 */

module.exports = percentile;

/**
 * Returns the `k`-th percentile of values in `array`.
 *
 * @param {Array} array Range of data that defines relative standing.
 * @param {number} k The percentile value that is between 0 through 1.
 * @return {number}
 * @example
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.25);
 * // => -12.5
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.50);
 * // => 100
 *
 * percentile([100, -100, 150, -50, 100, 250], 0.95);
 * // => 225
 */

function percentile(array, k) {
  var length = array.length;

  if (length === 0) {
    return 0;
  }

  if (typeof k !== 'number') {
    throw new TypeError('k must be a number');
  }

  if (k <= 0) {
    return array[0];
  }

  if (k >= 1) {
    return array[length - 1];
  }

  array.sort(function (a, b) {
    return a - b;
  });

  var index = (length - 1) * k;
  var lower = Math.floor(index);
  var upper = lower + 1;
  var weight = index % 1;

  if (upper >= length) {
    return array[lower];
  }

  return array[lower] * (1 - weight) + array[upper] * weight;
}

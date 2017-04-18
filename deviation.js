
/**
 * Module dependencies.
 */

var variance = require('./variance');

/**
 * Expose `deviation`.
 */

module.exports = deviation;

/**
 * Returns the standard deviation of the numbers in `array`.
 *
 * @param {Array} array
 * @return {number}
 * @example
 *
 * deviation([2, 4, 4, 4, 5, 5, 7, 9]);
 * // => 2
 */

function deviation(array) {
  return Math.sqrt(variance(array));
}

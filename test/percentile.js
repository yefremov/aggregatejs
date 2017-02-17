var test = require('tape');
var percentile = require('../').percentile;

test('percentile(array, k)', function (t) {
  t.equals(percentile([100, -100, 150, -50, 100, 250], 0.25), -12.5, 'should be equal -12.5');
  t.equals(percentile([100, -100, 150, -50, 100, 250], 0.50), 100, 'should be equal 100');
  t.equals(percentile([100, -100, 150, -50, 100, 250], 0.95), 225, 'should be equal 225');
  t.end();
});

var test = require('tape');
var max = require('../').max;

test('max(array)', function (t) {
  t.equals(max([100, -100, 150, -50, 250, 100]), 250, 'should be equal 250');
  t.equals(max([]), 0, 'should be equal 0');
  t.end();
});

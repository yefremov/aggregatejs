var test = require('tape');
var sum = require('../').sum;

test('sum(array)', function (t) {
  t.equals(sum([100, -100, 150, -50, 100, 250]), 450, 'should be equal 450');
  t.equals(sum([]), 0, 'should be equal 0');
  t.end();
});

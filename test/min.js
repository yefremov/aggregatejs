var test = require('tape');
var min = require('../').min;

test('min(array)', function (t) {
  t.equals(min([100, -100, 150, -50, 250, 100]), -100, 'should be equal -100');
  t.equals(min([]), 0, 'should be equal 0');
  t.end();
});

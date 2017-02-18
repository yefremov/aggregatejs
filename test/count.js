var test = require('tape');
var count = require('../count');

test('count(array)', function (t) {
  t.equals(count([100, -100, 150, -50, 250, 100]), 6, 'should be equal 6');
  t.equals(count([]), 0, 'should be equal 0');
  t.end();
});

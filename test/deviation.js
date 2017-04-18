var test = require('tape');
var deviation = require('../deviation');

test('deviation(array)', function (t) {
  t.equals(deviation([2, 4, 4, 4, 5, 5, 7, 9]), 2, 'should be equal 2');
  t.end();
});

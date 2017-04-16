var test = require('tape');
var variance = require('../variance');

test('variance(array)', function (t) {
  t.equals(variance([2, 4, 4, 4, 5, 5, 7, 9]), 4, 'should be equal 4');
  t.throws(function() {
    variance([]);
  }, /Error/, "should throw error");
  t.end();
});

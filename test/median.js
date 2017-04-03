var test = require('tape');
var median = require('../median');

test('median(array)', function (t) {
  t.equals(median([100, -100, 150, -50, 100, 250]), 100, 'should be equal 100');
  t.throws(function() {
    median([]);
  }, /Error/, "should throw error");
  t.end();
});

var test = require('tape');
var average = require('../average');

test('average(array)', function (t) {
  t.equals(average([100, -100, 150, -50, 100, 250]), 75, 'should be equal 75');
  t.throws(function() {
    average([]);
  }, /Error/, "should throw error");
  t.end();
});

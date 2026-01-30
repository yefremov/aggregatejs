import test from 'tape';
import geometricMean from '../src/geometricMean';

test('geometricMean(array)', (t) => {
  t.equals(geometricMean([2, 8]), 4, 'should calculate geometric mean correctly');
  t.ok(Math.abs(geometricMean([1, 3, 9, 27, 81]) - 9) < 0.0001, 'should work with multiple values');
  t.ok(Math.abs(geometricMean([4, 4, 4]) - 4) < 0.0001, 'should work with identical values');
  t.equals(geometricMean([1]), 1, 'should work with single element');
  t.equals(geometricMean([1, 0, 100]), 0, 'should return 0 if any value is 0');
  
  t.throws(() => {
    geometricMean([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    geometricMean([1, -5, 3]);
  }, /Array cannot contain negative numbers/, 'should throw error on negative numbers');
  
  t.throws(() => {
    geometricMean([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

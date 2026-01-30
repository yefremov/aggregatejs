import test from 'tape';
import harmonicMean from '../src/harmonicMean';

test('harmonicMean(array)', (t) => {
  t.ok(Math.abs(harmonicMean([1, 2, 4]) - 1.7142857142857142) < 0.0001, 'should calculate harmonic mean correctly');
  t.ok(Math.abs(harmonicMean([2, 3]) - 2.4) < 0.0001, 'should work with two values');
  t.equals(harmonicMean([5]), 5, 'should work with single element');
  t.equals(harmonicMean([4, 4, 4]), 4, 'should work with identical values');
  
  t.throws(() => {
    harmonicMean([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    harmonicMean([1, 0, 3]);
  }, /Array cannot contain zero/, 'should throw error on zero');
  
  t.throws(() => {
    harmonicMean([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

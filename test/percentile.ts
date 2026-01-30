import test from 'tape';
import percentile from '../src/percentile';

test('percentile(array, k)', (t) => {
  const input = [100, -100, 150, -50, 100, 250];
  t.equals(percentile(input, 0.25), -12.5, 'should be equal -12.5');
  t.equals(percentile(input, 0.50), 100, 'should be equal 100');
  t.equals(percentile(input, 0.95), 225, 'should be equal 225');
  t.equals(percentile([1, 2, 3, 4, 5], 0), 1, 'should return min at 0th percentile');
  t.equals(percentile([1, 2, 3, 4, 5], 1), 5, 'should return max at 100th percentile');
  
  // Test that original array is not mutated
  t.deepEquals(input, [100, -100, 150, -50, 100, 250], 'should not mutate input array');
  
  t.throws(() => {
    percentile([], 0.5);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    percentile([1, 2, 3], -0.1);
  }, /k must be between 0 and 1/, 'should throw error on k < 0');
  
  t.throws(() => {
    percentile([1, 2, 3], 1.1);
  }, /k must be between 0 and 1/, 'should throw error on k > 1');
  
  t.throws(() => {
    percentile([1, NaN, 3], 0.5);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

import test from 'tape';
import median from '../src/median';

test('median(array)', (t) => {
  const input = [100, -100, 150, -50, 100, 250];
  t.equals(median(input), 100, 'should be equal 100');
  t.equals(median([1, 2, 3]), 2, 'should calculate median for odd length');
  t.equals(median([1, 2, 3, 4]), 2.5, 'should calculate median for even length');
  t.equals(median([5]), 5, 'should work with single element');
  
  // Test that original array is not mutated
  t.deepEquals(input, [100, -100, 150, -50, 100, 250], 'should not mutate input array');
  
  t.throws(() => {
    median([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    median([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

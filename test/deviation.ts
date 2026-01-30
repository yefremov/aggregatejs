import test from 'tape';
import deviation from '../src/deviation';

test('deviation(array)', (t) => {
  t.equals(deviation([2, 4, 4, 4, 5, 5, 7, 9]), 2, 'should be equal 2');
  t.equals(deviation([1, 1, 1]), 0, 'should be 0 for identical values');
  
  t.throws(() => {
    deviation([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    deviation([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

import test from 'tape';
import variance from '../src/variance';

test('variance(array)', (t) => {
  t.equals(variance([2, 4, 4, 4, 5, 5, 7, 9]), 4, 'should be equal 4');
  t.equals(variance([1, 1, 1]), 0, 'should be 0 for identical values');
  
  t.throws(() => {
    variance([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    variance([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

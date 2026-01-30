import test from 'tape';
import mode from '../src/mode';

test('mode(array)', (t) => {
  t.equals(mode([1, 2, 2, 3, 4]), 2, 'should return single mode');
  t.deepEquals(mode([1, 1, 2, 2, 3]), [1, 2], 'should return multiple modes');
  t.equals(mode([1, 1, 1]), 1, 'should work with identical values');
  t.equals(mode([5]), 5, 'should work with single element');
  t.deepEquals(mode([1, 2, 3]), [1, 2, 3], 'should return all values when all have same frequency');
  
  t.throws(() => {
    mode([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    mode([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

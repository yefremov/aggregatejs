import test from 'tape';
import range from '../src/range';

test('range(array)', (t) => {
  t.equals(range([100, -100, 150, -50, 250, 100]), 350, 'should be equal 350');
  t.equals(range([1, 5]), 4, 'should calculate range correctly');
  t.equals(range([5]), 0, 'should be 0 for single element');
  t.equals(range([1, 1, 1]), 0, 'should be 0 for identical values');
  
  t.throws(() => {
    range([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    range([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

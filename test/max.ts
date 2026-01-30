import test from 'tape';
import max from '../src/max';

test('max(array)', (t) => {
  t.equals(max([100, -100, 150, -50, 250, 100]), 250, 'should be equal 250');
  t.equals(max([1]), 1, 'should work with single element');
  t.equals(max([-5, -10, -1]), -1, 'should work with negative numbers');
  
  t.throws(() => {
    max([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    max([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

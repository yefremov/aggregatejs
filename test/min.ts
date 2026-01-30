import test from 'tape';
import min from '../src/min';

test('min(array)', (t) => {
  t.equals(min([100, -100, 150, -50, 250, 100]), -100, 'should be equal -100');
  t.equals(min([1]), 1, 'should work with single element');
  t.equals(min([5, 10, 1]), 1, 'should work with positive numbers');
  
  t.throws(() => {
    min([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    min([1, Infinity, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on Infinity');
  
  t.end();
});

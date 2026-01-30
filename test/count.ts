import test from 'tape';
import count from '../src/count';

test('count(array)', (t) => {
  t.equals(count([100, -100, 150, -50, 250, 100]), 6, 'should be equal 6');
  t.equals(count([1]), 1, 'should count single element');
  t.equals(count([1, 2, 3]), 3, 'should count multiple elements');
  
  t.throws(() => {
    count([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    count([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.throws(() => {
    count([1, Infinity, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on Infinity');
  
  t.end();
});

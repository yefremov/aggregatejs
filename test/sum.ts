import test from 'tape';
import sum from '../src/sum';

test('sum(array)', (t) => {
  t.equals(sum([100, -100, 150, -50, 100, 250]), 450, 'should be equal 450');
  t.equals(sum([1, 2, 3]), 6, 'should sum positive numbers');
  t.equals(sum([-1, -2, -3]), -6, 'should sum negative numbers');
  t.equals(sum([0, 0, 0]), 0, 'should sum zeros');
  
  t.throws(() => {
    sum([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    sum([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

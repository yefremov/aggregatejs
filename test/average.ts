import test from 'tape';
import average from '../src/average';

test('average(array)', (t) => {
  t.equals(average([100, -100, 150, -50, 100, 250]), 75, 'should be equal 75');
  t.equals(average([1, 2, 3]), 2, 'should calculate average correctly');
  t.equals(average([5]), 5, 'should work with single element');
  
  t.throws(() => {
    average([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    average([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

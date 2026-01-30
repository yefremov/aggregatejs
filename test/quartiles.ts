import test from 'tape';
import quartiles from '../src/quartiles';

test('quartiles(array)', (t) => {
  const result = quartiles([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  t.equals(result.q1, 3, 'should calculate Q1 correctly');
  t.equals(result.q2, 5, 'should calculate Q2 (median) correctly');
  t.equals(result.q3, 7, 'should calculate Q3 correctly');
  
  const result2 = quartiles([1, 2, 3, 4]);
  t.equals(result2.q1, 1.75, 'should work with even-sized arrays');
  t.equals(result2.q2, 2.5, 'should calculate median correctly');
  t.equals(result2.q3, 3.25, 'should calculate Q3 correctly');
  
  t.throws(() => {
    quartiles([]);
  }, /Array cannot be empty/, 'should throw error on empty array');
  
  t.throws(() => {
    quartiles([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw error on NaN');
  
  t.end();
});

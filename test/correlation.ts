import test from 'tape';
import correlation from '../src/correlation';

test('correlation(arrayX, arrayY)', (t) => {
  // Perfect positive correlation
  const result0 = correlation([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]);
  t.ok(Math.abs(result0 - 1) < 0.0001, 'should return 1 for perfect positive correlation');
  
  // Perfect negative correlation
  const result01 = correlation([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]);
  t.ok(Math.abs(result01 - (-1)) < 0.0001, 'should return -1 for perfect negative correlation');
  
  // Near-zero correlation
  const result1 = correlation([1, 2, 3, 4, 5], [1, 3, 2, 5, 4]);
  t.ok(Math.abs(result1) < 1, 'should return near-zero for uncorrelated data');
  
  // Moderate positive correlation
  const result2 = correlation([1, 2, 3, 4, 5], [1, 2.5, 3, 4.2, 5]);
  t.ok(result2 > 0.9 && result2 <= 1, 'should return high positive correlation for similar trends');
  
  // Moderate negative correlation
  const result3 = correlation([1, 2, 3, 4, 5], [5, 3.5, 3, 1.8, 1]);
  t.ok(result3 < -0.9 && result3 >= -1, 'should return high negative correlation for opposite trends');
  
  // Single element arrays
  t.throws(() => {
    correlation([5], [10]);
  }, /Cannot calculate correlation with zero standard deviation/, 'should throw for single element arrays (zero std dev)');
  
  // Two element arrays (valid)
  const result4 = correlation([1, 2], [3, 4]);
  t.equals(result4, 1, 'should work with two elements showing positive correlation');
  
  // Error tests - empty arrays
  t.throws(() => {
    correlation([], [1, 2, 3]);
  }, /Arrays cannot be empty/, 'should throw on empty first array');
  
  t.throws(() => {
    correlation([1, 2, 3], []);
  }, /Arrays cannot be empty/, 'should throw on empty second array');
  
  // Error tests - different lengths
  t.throws(() => {
    correlation([1, 2, 3], [1, 2]);
  }, /Arrays must have the same length/, 'should throw on different length arrays');
  
  // Error tests - constant values (zero standard deviation)
  t.throws(() => {
    correlation([5, 5, 5, 5], [1, 2, 3, 4]);
  }, /Cannot calculate correlation with zero standard deviation/, 'should throw when first array has zero std dev');
  
  t.throws(() => {
    correlation([1, 2, 3, 4], [5, 5, 5, 5]);
  }, /Cannot calculate correlation with zero standard deviation/, 'should throw when second array has zero std dev');
  
  t.throws(() => {
    correlation([5, 5, 5, 5], [10, 10, 10, 10]);
  }, /Cannot calculate correlation with zero standard deviation/, 'should throw when both arrays have zero std dev');
  
  // Error tests - invalid input
  t.throws(() => {
    correlation([1, NaN, 3], [1, 2, 3]);
  }, /All array elements must be finite numbers/, 'should throw on NaN in first array');
  
  t.throws(() => {
    correlation([1, 2, 3], [1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw on NaN in second array');
  
  t.throws(() => {
    correlation([1, Infinity, 3], [1, 2, 3]);
  }, /All array elements must be finite numbers/, 'should throw on Infinity in first array');
  
  t.throws(() => {
    correlation([1, 2, 3], [1, -Infinity, 3]);
  }, /All array elements must be finite numbers/, 'should throw on -Infinity in second array');
  
  t.throws(() => {
    correlation('not an array' as any, [1, 2, 3]);
  }, /Expected two arrays of numbers/, 'should throw on non-array first argument');
  
  t.throws(() => {
    correlation([1, 2, 3], 'not an array' as any);
  }, /Expected two arrays of numbers/, 'should throw on non-array second argument');
  
  t.end();
});

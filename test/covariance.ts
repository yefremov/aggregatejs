import test from 'tape';
import covariance from '../src/covariance';

test('covariance(arrayX, arrayY)', (t) => {
  // Perfect positive covariance
  t.equals(covariance([1, 2, 3, 4, 5], [2, 4, 6, 8, 10]), 4, 'should calculate positive covariance correctly');
  
  // Negative covariance
  const negCov = covariance([1, 2, 3], [3, 2, 1]);
  t.ok(Math.abs(negCov - (-2/3)) < 0.0001, 'should calculate negative covariance correctly');
  
  // Zero covariance (no linear relationship)
  const result1 = covariance([1, 2, 3, 4, 5], [1, 3, 2, 5, 4]);
  t.ok(Math.abs(result1) < 2, 'should calculate near-zero covariance for uncorrelated data');
  
  // Identical arrays
  t.equals(covariance([5, 5, 5, 5], [5, 5, 5, 5]), 0, 'should be 0 for identical constant values');
  
  // Single element arrays
  t.equals(covariance([5], [10]), 0, 'should be 0 for single element arrays');
  
  // Two element arrays
  t.equals(covariance([1, 2], [3, 4]), 0.25, 'should work with two elements');
  
  // Error tests - empty arrays
  t.throws(() => {
    covariance([], [1, 2, 3]);
  }, /Arrays cannot be empty/, 'should throw on empty first array');
  
  t.throws(() => {
    covariance([1, 2, 3], []);
  }, /Arrays cannot be empty/, 'should throw on empty second array');
  
  // Error tests - different lengths
  t.throws(() => {
    covariance([1, 2, 3], [1, 2]);
  }, /Arrays must have the same length/, 'should throw on different length arrays');
  
  // Error tests - invalid input
  t.throws(() => {
    covariance([1, NaN, 3], [1, 2, 3]);
  }, /All array elements must be finite numbers/, 'should throw on NaN in first array');
  
  t.throws(() => {
    covariance([1, 2, 3], [1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw on NaN in second array');
  
  t.throws(() => {
    covariance([1, Infinity, 3], [1, 2, 3]);
  }, /All array elements must be finite numbers/, 'should throw on Infinity in first array');
  
  t.throws(() => {
    covariance([1, 2, 3], [1, -Infinity, 3]);
  }, /All array elements must be finite numbers/, 'should throw on -Infinity in second array');
  
  t.throws(() => {
    covariance('not an array' as any, [1, 2, 3]);
  }, /Expected two arrays of numbers/, 'should throw on non-array first argument');
  
  t.throws(() => {
    covariance([1, 2, 3], 'not an array' as any);
  }, /Expected two arrays of numbers/, 'should throw on non-array second argument');
  
  t.end();
});

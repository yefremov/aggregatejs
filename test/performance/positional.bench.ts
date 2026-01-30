/**
 * Performance benchmarks for positional statistics functions
 * These functions typically involve sorting, which is more expensive
 */

import Benchmark from 'benchmark';
import median from '../../src/median';
import percentile from '../../src/percentile';
import quartiles from '../../src/quartiles';
import { generateRandomArray, generateSortedArray, TEST_SIZES } from './utils';

const suite = new Benchmark.Suite();

// Generate test data
const smallArray = generateRandomArray(TEST_SIZES.SMALL);
const mediumArray = generateRandomArray(TEST_SIZES.MEDIUM);
const largeArray = generateRandomArray(TEST_SIZES.LARGE);

// Test with sorted data to see performance difference
const sortedMediumArray = generateSortedArray(TEST_SIZES.MEDIUM);

console.log('\n=== Positional Statistics Performance Tests ===\n');

// Median benchmarks
suite
  .add('median - small (10 elements)', () => {
    median(smallArray);
  })
  .add('median - medium (1K elements)', () => {
    median(mediumArray);
  })
  .add('median - large (100K elements)', () => {
    median(largeArray);
  })
  .add('median - sorted vs random (1K elements)', () => {
    median(sortedMediumArray);
  });

// Percentile benchmarks
suite
  .add('percentile (25th) - small (10 elements)', () => {
    percentile(smallArray, 0.25);
  })
  .add('percentile (25th) - medium (1K elements)', () => {
    percentile(mediumArray, 0.25);
  })
  .add('percentile (25th) - large (100K elements)', () => {
    percentile(largeArray, 0.25);
  })
  .add('percentile (50th) - medium (1K elements)', () => {
    percentile(mediumArray, 0.50);
  })
  .add('percentile (75th) - medium (1K elements)', () => {
    percentile(mediumArray, 0.75);
  })
  .add('percentile (95th) - medium (1K elements)', () => {
    percentile(mediumArray, 0.95);
  });

// Quartiles benchmarks
suite
  .add('quartiles - small (10 elements)', () => {
    quartiles(smallArray);
  })
  .add('quartiles - medium (1K elements)', () => {
    quartiles(mediumArray);
  })
  .add('quartiles - large (100K elements)', () => {
    quartiles(largeArray);
  });

// Run the suite
suite
  .on('cycle', (event: Benchmark.Event) => {
    console.log(String(event.target));
  })
  .on('complete', function(this: Benchmark.Suite) {
    console.log('\n=== Positional Statistics Tests Complete ===\n');
  })
  .run();

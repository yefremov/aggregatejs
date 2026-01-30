/**
 * Performance benchmarks for specialized functions
 */

import Benchmark from 'benchmark';
import mode from '../../src/mode';
import variance from '../../src/variance';
import deviation from '../../src/deviation';
import geometricMean from '../../src/geometricMean';
import harmonicMean from '../../src/harmonicMean';
import { generateRandomArray, generateArrayWithDuplicates, TEST_SIZES } from './utils';

const suite = new Benchmark.Suite();

// Generate test data
const smallArray = generateRandomArray(TEST_SIZES.SMALL);
const mediumArray = generateRandomArray(TEST_SIZES.MEDIUM);
const largeArray = generateRandomArray(TEST_SIZES.LARGE);

// Generate positive numbers for geometric and harmonic means
const smallPositive = generateRandomArray(TEST_SIZES.SMALL, 1, 1000);
const mediumPositive = generateRandomArray(TEST_SIZES.MEDIUM, 1, 1000);
const largePositive = generateRandomArray(TEST_SIZES.LARGE, 1, 1000);

// Generate arrays with duplicates for mode testing
const mediumWithDuplicates = generateArrayWithDuplicates(TEST_SIZES.MEDIUM, 50);
const largeWithDuplicates = generateArrayWithDuplicates(TEST_SIZES.LARGE, 100);

console.log('\n=== Specialized Functions Performance Tests ===\n');

// Mode benchmarks
suite
  .add('mode - small (10 elements)', () => {
    mode(smallArray);
  })
  .add('mode - medium (1K elements, many duplicates)', () => {
    mode(mediumWithDuplicates);
  })
  .add('mode - large (100K elements, many duplicates)', () => {
    mode(largeWithDuplicates);
  });

// Variance benchmarks
suite
  .add('variance - small (10 elements)', () => {
    variance(smallArray);
  })
  .add('variance - medium (1K elements)', () => {
    variance(mediumArray);
  })
  .add('variance - large (100K elements)', () => {
    variance(largeArray);
  });

// Deviation benchmarks
suite
  .add('deviation - small (10 elements)', () => {
    deviation(smallArray);
  })
  .add('deviation - medium (1K elements)', () => {
    deviation(mediumArray);
  })
  .add('deviation - large (100K elements)', () => {
    deviation(largeArray);
  });

// Geometric mean benchmarks
suite
  .add('geometricMean - small (10 elements)', () => {
    geometricMean(smallPositive);
  })
  .add('geometricMean - medium (1K elements)', () => {
    geometricMean(mediumPositive);
  })
  .add('geometricMean - large (100K elements)', () => {
    geometricMean(largePositive);
  });

// Harmonic mean benchmarks
suite
  .add('harmonicMean - small (10 elements)', () => {
    harmonicMean(smallPositive);
  })
  .add('harmonicMean - medium (1K elements)', () => {
    harmonicMean(mediumPositive);
  })
  .add('harmonicMean - large (100K elements)', () => {
    harmonicMean(largePositive);
  });

// Run the suite
suite
  .on('cycle', (event: Benchmark.Event) => {
    console.log(String(event.target));
  })
  .on('complete', function(this: Benchmark.Suite) {
    console.log('\n=== Specialized Functions Tests Complete ===\n');
  })
  .run();

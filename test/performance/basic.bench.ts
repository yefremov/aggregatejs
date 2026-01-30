/**
 * Performance benchmarks for basic statistics functions
 */

import Benchmark from 'benchmark';
import average from '../../src/average';
import count from '../../src/count';
import max from '../../src/max';
import min from '../../src/min';
import sum from '../../src/sum';
import range from '../../src/range';
import { generateRandomArray, TEST_SIZES } from './utils';

const suite = new Benchmark.Suite();

// Generate test data
const smallArray = generateRandomArray(TEST_SIZES.SMALL);
const mediumArray = generateRandomArray(TEST_SIZES.MEDIUM);
const largeArray = generateRandomArray(TEST_SIZES.LARGE);
const xlargeArray = generateRandomArray(TEST_SIZES.XLARGE);

console.log('\n=== Basic Statistics Performance Tests ===\n');

// Average benchmarks
suite
  .add('average - small (10 elements)', () => {
    average(smallArray);
  })
  .add('average - medium (1K elements)', () => {
    average(mediumArray);
  })
  .add('average - large (100K elements)', () => {
    average(largeArray);
  })
  .add('average - xlarge (1M elements)', () => {
    average(xlargeArray);
  });

// Count benchmarks
suite
  .add('count - small (10 elements)', () => {
    count(smallArray);
  })
  .add('count - medium (1K elements)', () => {
    count(mediumArray);
  })
  .add('count - large (100K elements)', () => {
    count(largeArray);
  })
  .add('count - xlarge (1M elements)', () => {
    count(xlargeArray);
  });

// Sum benchmarks
suite
  .add('sum - small (10 elements)', () => {
    sum(smallArray);
  })
  .add('sum - medium (1K elements)', () => {
    sum(mediumArray);
  })
  .add('sum - large (100K elements)', () => {
    sum(largeArray);
  })
  .add('sum - xlarge (1M elements)', () => {
    sum(xlargeArray);
  });

// Min benchmarks
suite
  .add('min - small (10 elements)', () => {
    min(smallArray);
  })
  .add('min - medium (1K elements)', () => {
    min(mediumArray);
  })
  .add('min - large (100K elements)', () => {
    min(largeArray);
  })
  .add('min - xlarge (1M elements)', () => {
    min(xlargeArray);
  });

// Max benchmarks
suite
  .add('max - small (10 elements)', () => {
    max(smallArray);
  })
  .add('max - medium (1K elements)', () => {
    max(mediumArray);
  })
  .add('max - large (100K elements)', () => {
    max(largeArray);
  })
  .add('max - xlarge (1M elements)', () => {
    max(xlargeArray);
  });

// Range benchmarks
suite
  .add('range - small (10 elements)', () => {
    range(smallArray);
  })
  .add('range - medium (1K elements)', () => {
    range(mediumArray);
  })
  .add('range - large (100K elements)', () => {
    range(largeArray);
  })
  .add('range - xlarge (1M elements)', () => {
    range(xlargeArray);
  });

// Run the suite
suite
  .on('cycle', (event: Benchmark.Event) => {
    console.log(String(event.target));
  })
  .on('complete', function(this: Benchmark.Suite) {
    console.log('\n=== Basic Statistics Tests Complete ===\n');
  })
  .run();

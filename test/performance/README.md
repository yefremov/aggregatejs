# Performance Testing Guide

This directory contains performance benchmarks for all aggregatejs functions using Benchmark.js.

## Running Benchmarks

```bash
# Run all performance tests
npm run perf

# Run specific benchmark suites
npm run perf:basic          # Basic statistics
npm run perf:positional     # Positional statistics  
npm run perf:specialized    # Specialized functions
```

## Benchmark Files

- **basic.bench.ts** - Tests for average, count, sum, min, max, range
- **positional.bench.ts** - Tests for median, percentile, quartiles
- **specialized.bench.ts** - Tests for mode, variance, deviation, geometricMean, harmonicMean
- **all.bench.ts** - Orchestrates running all benchmarks sequentially
- **utils.ts** - Helper functions for generating test data

## Test Data Sizes

The benchmarks test functions across various array sizes:

- **SMALL** (10 elements) - Typical use cases
- **MEDIUM** (1,000 elements) - Common real-world scenarios
- **LARGE** (100,000 elements) - Stress testing
- **XLARGE** (1,000,000 elements) - Extreme performance testing (basic functions only)

## Understanding Results

Each benchmark reports:
- **ops/sec** - Operations per second (higher is better)
- **±percentage** - Margin of error
- **runs sampled** - Number of samples collected for statistical significance

Example output:
```
average - medium (1K elements) x 1,067,130 ops/sec ±1.63% (98 runs sampled)
```

This means the `average` function processes ~1 million arrays of 1,000 elements per second, with a 1.63% margin of error, based on 98 test runs.

## Performance Characteristics

### Fast Operations (O(n))
Simple iteration functions are extremely fast:
- count, sum, average
- min, max, range
- variance, deviation

### Moderate Operations
Functions with additional overhead:
- mode (frequency counting with Map)
- geometricMean, harmonicMean (mathematical operations)

### Slower Operations (O(n log n))
Functions that require sorting:
- median, percentile, quartiles

These are inherently slower due to sorting but still highly optimized.

## Adding New Benchmarks

To add benchmarks for a new function:

1. Import the function and required utilities:
```typescript
import myFunction from '../../src/myFunction';
import { generateRandomArray, TEST_SIZES } from './utils';
```

2. Generate test data:
```typescript
const mediumArray = generateRandomArray(TEST_SIZES.MEDIUM);
```

3. Add benchmark to suite:
```typescript
suite.add('myFunction - medium (1K elements)', () => {
  myFunction(mediumArray);
});
```

4. Update all.bench.ts if creating a new file.

## Continuous Performance Monitoring

Consider tracking performance metrics over time to:
- Identify performance regressions
- Compare optimization attempts
- Validate changes don't negatively impact performance
- Document performance improvements in changelogs

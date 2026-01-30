# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- **New Functions:**
  - `correlation()` - Returns the Pearson correlation coefficient between two arrays (issue #8)
  - `covariance()` - Returns the population covariance between two arrays

## [1.0.0] - 2026-01-30

### Added
- **New Functions:**
  - `mode()` - Returns the most frequently occurring value(s)
  - `range()` - Returns the difference between max and min values
  - `quartiles()` - Returns Q1, Q2 (median), and Q3 values
  - `geometricMean()` - Returns the geometric mean (nth root of product)
  - `harmonicMean()` - Returns the harmonic mean (reciprocal of average of reciprocals)

### Changed
- **BREAKING:** All functions now throw `RangeError` when passed empty arrays (previously some returned 0)
- **BREAKING:** All functions now throw `TypeError` when passed invalid input (NaN, Infinity, non-numbers)
- **BREAKING:** Error messages are now descriptive instead of generic "Error"
- **Fixed:** `median()` and `percentile()` no longer mutate the input array
- **Fixed:** `percentile()` now validates k parameter range (0-1) and throws appropriate errors
- **Improved:** Input validation added to all functions for better error handling
- **Improved:** `average()` now leverages `sum()` for DRY principle
- **Improved:** `count()` simplified implementation
- **Improved:** `variance()` calculation optimized

### Migration Guide from v0.x to v1.0.0

If you're upgrading from v0.x, be aware of these breaking changes:

#### Empty Array Handling
**Before (v0.x):**
```javascript
max([]);  // returned 0
min([]);  // returned 0
sum([]);  // returned 0
count([]); // returned 0
percentile([], 0.5); // returned 0
```

**After (v1.0.0):**
```javascript
max([]);  // throws RangeError: 'Array cannot be empty'
min([]);  // throws RangeError: 'Array cannot be empty'
sum([]);  // throws RangeError: 'Array cannot be empty'
count([]); // throws RangeError: 'Array cannot be empty'
percentile([], 0.5); // throws RangeError: 'Array cannot be empty'
```

#### Invalid Input Handling
**Before (v0.x):**
```javascript
max([1, NaN, 3]);  // returned NaN or unexpected results
```

**After (v1.0.0):**
```javascript
max([1, NaN, 3]);  // throws TypeError: 'All array elements must be finite numbers'
```

#### Array Mutation Fix
**Before (v0.x):**
```javascript
const arr = [3, 1, 2];
median(arr);  // arr is now [1, 2, 3] - MUTATED!
```

**After (v1.0.0):**
```javascript
const arr = [3, 1, 2];
median(arr);  // arr is still [3, 1, 2] - NOT MUTATED
```

#### To Migrate Your Code:
1. Add try-catch blocks around aggregation function calls if you were relying on default return values for empty arrays
2. Validate your input data before calling functions, or handle the new error types
3. If you were working around the array mutation bug, you can now remove those workarounds

## [0.0.5] - Previous Release
- TypeScript migration
- Full type definitions
- Test coverage improvements


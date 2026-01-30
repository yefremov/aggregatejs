# Project Brief - aggregatejs

**Last Updated:** 30/01/2026, 11:48 am (Europe/Riga, UTC+2:00)  
**Version:** 1.1.1  
**Repository:** https://github.com/yefremov/aggregatejs

---

## Project Overview

**aggregatejs** is a comprehensive TypeScript library providing statistical and mathematical aggregation functions for arrays of numbers.

## Core Requirements

### Primary Goals
1. **Comprehensive Coverage**: Provide a complete set of statistical aggregation functions
2. **Type Safety**: Full TypeScript implementation with strict type checking
3. **Zero Dependencies**: No runtime dependencies for maximum portability and security
4. **Modular Design**: Individual function imports for optimal tree-shaking
5. **Robust Validation**: Comprehensive error handling with descriptive messages
6. **No Side Effects**: Pure functions that don't mutate input data

### Functional Requirements

#### Statistical Functions (16 total)
1. **Basic Statistics** (7 functions)
   - `average()` - Arithmetic mean
   - `count()` - Element count
   - `max()` - Maximum value
   - `min()` - Minimum value
   - `sum()` - Sum of all values
   - `range()` - Max - Min difference
   - `mode()` - Most frequent value(s)

2. **Positional Statistics** (3 functions)
   - `median()` - Middle value
   - `percentile()` - k-th percentile
   - `quartiles()` - Q1, Q2, Q3 values

3. **Dispersion Statistics** (2 functions)
   - `variance()` - Population variance
   - `deviation()` - Standard deviation

4. **Correlation & Covariance** (2 functions)
   - `correlation()` - Pearson correlation coefficient
   - `covariance()` - Population covariance

5. **Specialized Means** (2 functions)
   - `geometricMean()` - nth root of product
   - `harmonicMean()` - Reciprocal of mean of reciprocals

### Quality Requirements

#### Error Handling
- **Empty Arrays**: All functions throw `RangeError` with message "Array cannot be empty"
- **Invalid Input**: All functions throw `TypeError` for:
  - Non-array inputs
  - Arrays containing `NaN`
  - Arrays containing `Infinity` or `-Infinity`
  - Non-numeric values
- **Invalid Parameters**: Functions validate their parameters (e.g., percentile k ∈ [0,1])

#### Performance
- Optimized for small to medium datasets (< 100K elements)
- O(n) complexity for most functions
- O(n log n) for sorting-based functions (median, percentile, quartiles)

#### Code Quality
- TypeScript strict mode enabled
- Comprehensive test coverage (all functions tested)
- JSDoc documentation for all public APIs
- No external runtime dependencies

## Project Scope

### In Scope
- Statistical aggregation functions for numeric arrays
- TypeScript type definitions
- CommonJS module format
- Individual function exports for tree-shaking
- Comprehensive input validation
- NPM package distribution

### Out of Scope
- Non-numeric data types (strings, objects, dates)
- Streaming/incremental calculations
- Matrix operations
- Data visualization
- Database integrations
- Browser-specific features

## Success Criteria

1. ✅ All 16 functions implemented and working correctly
2. ✅ Zero runtime dependencies
3. ✅ Full TypeScript type coverage
4. ✅ Comprehensive test suite with high coverage
5. ✅ Clear API documentation
6. ✅ Published to NPM
7. ✅ CI/CD pipeline operational
8. ✅ No array mutation bugs
9. ✅ Consistent error handling across all functions

## Target Users

### Primary Audience
- JavaScript/TypeScript developers
- Data analysts using Node.js
- Backend developers needing statistical calculations
- Frontend developers working with data visualization

### Use Cases
- Data analysis and reporting
- Statistical calculations in web applications
- Scientific computing in Node.js
- Quality metrics and analytics
- Mathematical computations in backend services

## Project Constraints

### Technical Constraints
- Must work in Node.js environment
- Must support TypeScript and JavaScript
- CommonJS module format (current constraint)
- No breaking changes without major version bump

### Business Constraints
- Open source MIT license
- Community-driven development
- Maintained by single author (Anton Yefremov)
- NPM as primary distribution channel

## Version History

| Version | Status | Key Features |
|---------|--------|--------------|
| 1.1.1 | Current | correlation(), covariance() functions |
| 1.0.0 | Released | 5 new functions, breaking changes, bug fixes |
| 0.0.5 | Legacy | TypeScript migration |

---

*This project brief is the foundation document. All other memory bank files build upon these core requirements and constraints.*

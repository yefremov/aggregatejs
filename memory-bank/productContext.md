# Product Context - aggregatejs

**Last Updated:** 30/01/2026, 11:49 am (Europe/Riga, UTC+2:00)  
**Related:** [projectbrief.md](projectbrief.md)

---

## Why This Project Exists

### The Problem Space

**Problem 1: Fragmented Statistical Tools**
- Developers need statistical functions but don't want to pull in heavy libraries
- Existing solutions often bundle unnecessary features
- Many libraries lack proper TypeScript support

**Problem 2: Data Quality & Validation**
- Statistical functions often fail silently with invalid data
- NaN and Infinity values propagate through calculations undetected
- Empty arrays produce misleading results (returning 0 instead of erroring)

**Problem 3: Type Safety**
- JavaScript developers working with numeric data lack type-safe statistical functions
- Runtime errors from passing wrong data types are common
- API documentation often unclear about input/output types

**Problem 4: Maintainability**
- Large statistical libraries create dependency bloat
- Hard to audit security when pulling in many dependencies
- Tree-shaking often doesn't work effectively

### The Solution

**aggregatejs** provides:

1. **Focused Functionality**: Only statistical aggregation functions, nothing more
2. **Zero Dependencies**: Complete isolation from supply chain risks
3. **Type Safety First**: Built with TypeScript, strict mode enabled
4. **Fail Fast**: Invalid input throws clear, descriptive errors immediately
5. **Modular Design**: Import only the functions you need
6. **Pure Functions**: No side effects, no array mutations (v1.0.0+)

## How It Should Work

### User Journey: Simple Use Case

```typescript
// Developer needs to calculate average of user ratings
import { average } from 'aggregatejs';

const ratings = [4.5, 5.0, 3.8, 4.2, 5.0];
const avgRating = average(ratings);
// => 4.5
```

**Experience Goals:**
- ✅ Zero configuration required
- ✅ Intuitive function names
- ✅ Works immediately after install
- ✅ TypeScript autocomplete available
- ✅ Clear error if ratings array is invalid

### User Journey: Advanced Use Case

```typescript
// Data analyst needs correlation analysis
import correlation from 'aggregatejs/dist/correlation';
import { variance, deviation } from 'aggregatejs';

const sales = [100, 120, 115, 130, 125];
const marketing = [10, 15, 12, 18, 16];

// Analyze relationship
const corr = correlation(sales, marketing);
// => 0.96 (strong positive correlation)

// Additional metrics
const salesVar = variance(sales);
const salesStd = deviation(sales);
```

**Experience Goals:**
- ✅ Individual imports for bundle size optimization
- ✅ Functions work together seamlessly
- ✅ Clear mathematical meaning
- ✅ Predictable behavior

### User Journey: Error Handling

```typescript
import { max } from 'aggregatejs';

try {
  const result = max([]); // Empty array
} catch (error) {
  console.error(error.message);
  // "Array cannot be empty"
  // Developer knows exactly what went wrong
}

try {
  const result = max([1, NaN, 3]);
} catch (error) {
  console.error(error.message);
  // "All array elements must be finite numbers"
  // Developer can identify and fix data quality issue
}
```

**Experience Goals:**
- ✅ Clear, actionable error messages
- ✅ Appropriate error types (RangeError, TypeError)
- ✅ Early detection of data quality issues
- ✅ No silent failures

## User Experience Principles

### 1. Simplicity
**Principle:** Each function does one thing well
- Function names match common statistical terminology
- No configuration options or complex parameters
- Documentation shows simple examples first

### 2. Predictability
**Principle:** Functions behave consistently
- All functions validate input the same way
- All functions throw errors for invalid data
- No side effects or array mutations (v1.0.0+)
- Same operation always produces same result (pure functions)

### 3. Clarity
**Principle:** Errors and documentation are clear
- Error messages describe exactly what went wrong
- JSDoc comments explain parameters and return values
- README provides complete API reference
- Examples show both success and error cases

### 4. Performance
**Principle:** Fast enough for typical use cases
- Optimized for small to medium datasets
- O(n) complexity for most functions
- No unnecessary allocations
- Direct implementations, no wrapper overhead

### 5. Safety
**Principle:** Catch errors at development time
- TypeScript strict mode enabled
- Type definitions prevent wrong usage
- Runtime validation catches data quality issues
- No dependencies means no supply chain vulnerabilities

## Target Outcomes

### For JavaScript Developers
- **Easy Integration**: `npm install aggregatejs` and start using immediately
- **Better Code**: Type-safe statistical operations catch bugs early
- **Smaller Bundles**: Import only needed functions
- **Confidence**: Comprehensive tests ensure reliability

### For TypeScript Developers
- **Full Type Coverage**: No `any` types, strict mode compatible
- **IDE Support**: Autocomplete and inline documentation
- **Type Safety**: Compiler catches invalid usage
- **Clear APIs**: Type signatures document expected behavior

### For Data Analysts (Node.js)
- **Familiar Functions**: Standard statistical terminology
- **Data Validation**: Catch bad data early
- **Composable**: Functions work together naturally
- **Reliable**: Consistent behavior across versions

### For Library Authors
- **Lightweight Dependency**: Zero transitive dependencies
- **Tree-Shakeable**: Import only what you need
- **Stable API**: Semantic versioning, clear migration guides
- **Well-Tested**: High confidence in correctness

## Value Proposition

### Compared to Lodash
- ✅ **aggregatejs**: Statistical focus, built for numbers
- ❌ **lodash**: General utilities, statistical functions limited
- ✅ **aggregatejs**: Zero dependencies
- ❌ **lodash**: Has dependencies in some configurations

### Compared to Simple-Statistics
- ✅ **aggregatejs**: TypeScript first, strict types
- ⚠️ **simple-statistics**: JavaScript with type definitions added later
- ✅ **aggregatejs**: Modular imports work well
- ⚠️ **simple-statistics**: Larger default bundle

### Compared to Math.js
- ✅ **aggregatejs**: Lightweight (focused scope)
- ❌ **mathjs**: Heavy (comprehensive math library)
- ✅ **aggregatejs**: Fast startup, minimal bundle
- ❌ **mathjs**: Feature-rich but large footprint

### Compared to D3-Array
- ✅ **aggregatejs**: Independent, zero dependencies
- ⚠️ **d3-array**: Part of D3 ecosystem
- ✅ **aggregatejs**: Pure statistical aggregations
- ⚠️ **d3-array**: Mixed with array manipulation utilities

## Success Metrics

### Adoption Metrics
- NPM downloads per week
- GitHub stars and forks
- Number of dependent packages
- Community contributions (PRs, issues)

### Quality Metrics
- Test coverage percentage
- Zero reported bugs for validated inputs
- Documentation clarity (measured by support questions)
- TypeScript adoption rate among users

### User Satisfaction
- Positive feedback on error messages
- Minimal confusion about API usage
- Few requests for breaking changes
- Active usage in production applications

---

## Design Philosophy Summary

**aggregatejs** exists to provide **one thing done well**: statistical aggregation functions that are **type-safe**, **well-validated**, and **dependency-free**. 

The product prioritizes:
1. **Developer Experience**: Clear APIs, good errors, great TypeScript support
2. **Reliability**: Comprehensive testing, consistent behavior
3. **Simplicity**: Focused scope, no feature bloat
4. **Performance**: Fast enough for typical use cases
5. **Safety**: No dependencies, strong validation, pure functions

*This document guides all product decisions and feature additions. Any feature that doesn't align with these principles should be carefully reconsidered.*

# Memory Bank - aggregatejs Project

**Last Updated:** 30/01/2026, 9:43 am (Europe/Riga, UTC+2:00)  
**Version:** 1.0.0  
**Repository:** https://github.com/yefremov/aggregatejs

---

## 📋 Project Overview

**Purpose:** A comprehensive TypeScript library providing statistical and mathematical aggregation functions for arrays of numbers.

**Key Characteristics:**
- TypeScript implementation with full type definitions
- No external dependencies (runtime)
- Individual function imports supported
- CommonJS module format with ES6 exports
- Comprehensive test coverage (88 tests, all passing)
- Robust error handling with descriptive messages
- Pure functions with no side effects

---

## 🗂️ Project Structure

### Core Files

| File | Purpose | Status |
|------|---------|--------|
| `src/index.ts` | Main TypeScript entry point | ✅ Active |
| `dist/index.js` | Compiled JavaScript output | ✅ Generated |
| `dist/index.d.ts` | TypeScript type definitions | ✅ Generated |
| `tsconfig.json` | TypeScript configuration | ✅ Active |
| `package.json` | NPM package configuration (v1.0.0) | ✅ Active |
| `README.md` | Documentation and API reference | ✅ Updated |
| `CHANGELOG.md` | Version history and migration guide | ✅ New |
| `LICENSE` | MIT License | ✅ Active |

### Aggregation Functions (14 total)

| Function | Source File | Description | Input | Output | New in v1.0.0 |
|----------|-------------|-------------|-------|--------|---------------|
| `average` | `src/average.ts` | Arithmetic mean | number[] | number | ✅ Improved |
| `count` | `src/count.ts` | Count elements | number[] | number | ✅ Improved |
| `deviation` | `src/deviation.ts` | Standard deviation | number[] | number | ✅ Improved |
| `geometricMean` | `src/geometricMean.ts` | Geometric mean | number[] | number | ⭐ NEW |
| `harmonicMean` | `src/harmonicMean.ts` | Harmonic mean | number[] | number | ⭐ NEW |
| `max` | `src/max.ts` | Maximum value | number[] | number | ✅ Improved |
| `median` | `src/median.ts` | Median value | number[] | number | ✅ Fixed |
| `min` | `src/min.ts` | Minimum value | number[] | number | ✅ Improved |
| `mode` | `src/mode.ts` | Most frequent value(s) | number[] | number \| number[] | ⭐ NEW |
| `percentile` | `src/percentile.ts` | k-th percentile | number[], k: number | number | ✅ Fixed |
| `quartiles` | `src/quartiles.ts` | Q1, Q2, Q3 values | number[] | {q1, q2, q3} | ⭐ NEW |
| `range` | `src/range.ts` | Max - Min | number[] | number | ⭐ NEW |
| `sum` | `src/sum.ts` | Sum of all values | number[] | number | ✅ Improved |
| `variance` | `src/variance.ts` | Variance population | number[] | number | ✅ Improved |

### Test Files

Located in `test/` directory - **88 tests, all passing ✅**

Each function has comprehensive test coverage including:
- Normal operation with various inputs
- Error throwing for empty arrays
- Error throwing for invalid inputs (NaN, Infinity, non-numbers)
- Edge cases (single element, identical values, etc.)
- Array mutation tests (for median/percentile)

---

## 🏗️ Architecture Decisions

### v1.0.0 Breaking Changes (2026-01-30)

**Major improvements and standardization:**

1. **Consistent Error Handling**
   - All functions now throw `RangeError` for empty arrays
   - All functions now throw `TypeError` for invalid input (NaN, Infinity, non-numbers)
   - Descriptive error messages replace generic "Error"

2. **Bug Fixes**
   - `median()` no longer mutates input array (creates sorted copy)
   - `percentile()` no longer mutates input array (creates sorted copy)
   - `percentile()` now validates k parameter range [0, 1]

3. **Code Quality**
   - All functions validate input comprehensively
   - `average()` now uses `sum()` for DRY principle
   - `count()` simplified implementation
   - `variance()` calculation optimized

4. **New Functions**
   - `mode()` - Most frequently occurring value(s)
   - `range()` - Difference between max and min
   - `quartiles()` - Q1, Q2, Q3 values
   - `geometricMean()` - nth root of product
   - `harmonicMean()` - Reciprocal of mean of reciprocals

### Module System
- **Format:** CommonJS output with ES6 imports/exports in source
- **Source:** TypeScript with ES6 module syntax
- **Output:** CommonJS for maximum compatibility
- **Type Definitions:** Automatically generated `.d.ts` files

### Code Organization
- **One function per file:** Enables tree-shaking and selective imports
- **Source directory:** All TypeScript source in `src/`
- **Build output:** Compiled JavaScript and type definitions in `dist/`
- **Index file:** Provides convenient bulk import option
- **No dependencies:** Keeps package lightweight and secure

### Testing Strategy
- **Framework:** Tape (minimal, fast)
- **Language:** TypeScript with `ts-node`
- **Type Definitions:** `@types/tape` for full type safety in tests
- **Coverage:** 88 tests covering all functions and edge cases
- **CI/CD:** Travis CI
- **Coverage Reporting:** Coveralls

---

## 📦 Dependencies

### Runtime
- **None** - Zero dependencies for production use

### Development
- `typescript@^5.9.3` - TypeScript compiler
- `@types/node@^20.19.30` - Node.js type definitions
- `@types/tape@^5.8.1` - Tape type definitions
- `ts-node@^10.9.2` - TypeScript execution for Node.js
- `tape@^4.6.3` - Testing framework
- `tap-spec@^4.1.1` - Test output formatter
- `nyc@^10.1.2` - Code coverage tool
- `coveralls@^2.11.16` - Coverage reporting service

---

## 🔧 Development Workflow

### Building the Project
```bash
npm run build         # Compile TypeScript to JavaScript
npm run clean         # Remove dist directory
```

### Running Tests
```bash
npm test              # Run TypeScript tests directly with ts-node
npm run test-cov      # Run tests with coverage
npm run report-cov    # Report coverage to Coveralls
```

### Adding New Functions
1. Create TypeScript file in `src/` (e.g., `src/newfunction.ts`)
2. Implement function with proper types, validation, and JSDoc
3. Add export to `src/index.ts`
4. Build the project with `npm run build`
5. Create test file in `test/` (e.g., `test/newfunction.ts`)
6. Write comprehensive tests including edge cases
7. Update README.md with API documentation
8. Update CHANGELOG.md
9. Update this memory bank

---

## 📝 Code Standards

### TypeScript Function Template
```typescript
/**
 * Brief description of what the function does.
 *
 * @param array - The array of numbers
 * @param optional - Optional parameter description
 * @returns Description of return value
 * @throws {TypeError} When invalid input
 * @throws {RangeError} When array is empty or parameter out of range
 * @example
 *
 * functionName([1, 2, 3]);
 * // => result
 */
export default function functionName(array: number[], optional?: number): number {
  // Input validation
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }
  
  if (array.length === 0) {
    throw new RangeError('Array cannot be empty');
  }
  
  // Validate all elements
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }
  
  // Implementation
  // Return result
}
```

### Input Validation Standard (v1.0.0+)
All functions must:
1. Check if input is an array
2. Check if array is not empty
3. Validate all elements are finite numbers
4. Throw descriptive errors

### Testing Template
```typescript
import test from 'tape';
import functionName from '../src/functionName';

test('functionName()', (t) => {
  // Normal operation tests
  t.equals(functionName([1, 2, 3]), expectedResult, 'description');
  
  // Edge cases
  t.equals(functionName([1]), expectedResult, 'single element');
  
  // Error tests
  t.throws(() => {
    functionName([]);
  }, /Array cannot be empty/, 'should throw on empty array');
  
  t.throws(() => {
    functionName([1, NaN, 3]);
  }, /All array elements must be finite numbers/, 'should throw on NaN');
  
  t.end();
});
```

---

## 🎯 Current Status

### v1.0.0 Release (2026-01-30) ✅

**Completed Features:**
- ✅ 14 core aggregation functions (9 existing + 5 new)
- ✅ Full TypeScript implementation with strict type checking
- ✅ Comprehensive error handling and input validation
- ✅ Bug fixes (array mutation, error messages)
- ✅ 88 tests - all passing
- ✅ Complete documentation (README, CHANGELOG)
- ✅ Type definitions (.d.ts files)
- ✅ NPM package ready for publishing

### Recent Changes (v1.0.0)
- **New Functions:** mode, range, quartiles, geometricMean, harmonicMean
- **Breaking Changes:** Consistent error handling across all functions
- **Bug Fixes:** Array mutation in median/percentile, better validation
- **Improvements:** DRY principle, simplified code, better performance
- **Documentation:** Comprehensive API docs, migration guide, changelog

### Known Issues
- None currently tracked

### Future Enhancements (Backlog)
- Consider ESM module support
- Additional statistical functions (skewness, kurtosis)
- Sample variance/deviation (in addition to population)
- Weighted mean functions
- Performance benchmarks
- Browser compatibility testing

---

## 🔄 Version History

| Version | Date | Changes |
|---------|------|---------|
| 1.0.0 | 2026-01-30 | Major release - 5 new functions, breaking changes, bug fixes |
| 0.0.5 | Previous | TypeScript migration, full type definitions |

---

## 🤝 Contributing

See `CONTRIBUTING.md` for contribution guidelines.

### Review Checklist
- [ ] Function implemented with clear logic and proper TypeScript types
- [ ] Comprehensive input validation (array check, empty check, element validation)
- [ ] Descriptive error messages
- [ ] TypeScript compiles without errors
- [ ] Test coverage added (normal cases, edge cases, error cases)
- [ ] Documentation updated (README.md, CHANGELOG.md)
- [ ] No breaking changes (or properly documented)
- [ ] All tests passing
- [ ] Type definitions generated correctly
- [ ] Memory bank updated

---

## 📚 Resources

- **NPM Package:** https://www.npmjs.com/package/aggregatejs
- **GitHub:** https://github.com/yefremov/aggregatejs
- **Travis CI:** https://travis-ci.org/yefremov/aggregatejs
- **Coverage:** https://coveralls.io/github/yefremov/aggregatejs

---

## 💡 Design Philosophy

1. **Simplicity:** Each function does one thing well
2. **Predictability:** Pure functions with no side effects (v1.0.0+: no array mutation)
3. **Modularity:** Import only what you need
4. **Reliability:** Comprehensive test coverage and error handling
5. **Lightweight:** No runtime dependencies
6. **Type Safety:** Full TypeScript support with strict mode
7. **Robustness:** Validate all inputs, provide clear error messages

---

## 🔍 Notes & Observations

### v1.0.0 Improvements
- **Error handling is now consistent** across all 14 functions
- **No more silent failures** - all edge cases throw descriptive errors
- **Array mutation bug fixed** - median and percentile no longer mutate input
- **Better DRY principle** - functions reuse other functions where appropriate
- **Production ready** - comprehensive tests, documentation, and error handling

### Implementation Details
- All functions expect `number[]` typed arrays as input
- TypeScript enforces type safety at compile time
- Functions use standard JavaScript Math operations
- Suitable for small to medium datasets
- For large datasets, consider streaming solutions
- Backward compatible at compile time (TypeScript types unchanged)
- Breaking changes only in runtime behavior (error throwing)

### Build Process
- Source: TypeScript in `src/` directory
- Output: JavaScript + type definitions in `dist/` directory
- The `dist/` directory is git-ignored but published to npm
- `prepare` script ensures build runs before publish

---

*This memory bank is a living document. Update it whenever significant changes or decisions are made to the project.*

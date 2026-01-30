# Active Context - aggregatejs

**Last Updated:** 30/01/2026, 11:52 am (Europe/Riga, UTC+2:00)  
**Related:** [projectbrief.md](projectbrief.md) | [progress.md](progress.md)

---

## Current Work Focus

### Version 1.1.1 (Current State)

**Status:** Unreleased - ready for next version bump

**Recent Additions:**
- ✅ `correlation()` function - Pearson correlation coefficient (GitHub issue #8)
- ✅ `covariance()` function - Population covariance between two arrays
- ✅ Comprehensive test coverage for both new functions
- ✅ Documentation updated in README.md
- ✅ CHANGELOG.md updated with unreleased section

**What's Working:**
- All 16 aggregation functions implemented and tested
- Zero test failures
- Full TypeScript type coverage
- CI/CD pipeline operational (Cirrus CI + Codecov)
- Documentation generated via TypeDoc
- Performance benchmarks available

## Recent Changes

### CI/CD Fix: Coverage Directory Issue (2026-01-30)

**Problem:**
- Cirrus CI coverage upload was failing with error: "cannot create coverage/lcov.info: Directory nonexistent"
- The `npm run report-cov` script tries to redirect output to `coverage/lcov.info`
- Shell redirect fails if the parent directory doesn't exist

**Solution:**
- Updated `.cirrus.yml` to create coverage directory before generating report: `mkdir -p coverage`
- Updated `package.json` `report-cov` script to also create directory for consistency
- Changed from: `nyc report --reporter=text-lcov > coverage/lcov.info`
- Changed to: `mkdir -p coverage && nyc report --reporter=text-lcov > coverage/lcov.info`

**Verification:**
- ✅ Tests pass locally (122/122 passing)
- ✅ Coverage report generates successfully
- ✅ `coverage/lcov.info` file created properly
- ✅ Overall coverage: 93.44% statements, 85.14% branch

### Major Milestone: v1.0.0 Release (2026-01-30)

**Breaking Changes Implemented:**
1. **Error Handling Standardization**
   - All functions now throw `RangeError` for empty arrays
   - All functions now throw `TypeError` for invalid input (NaN, Infinity)
   - Descriptive error messages replace generic errors

2. **Bug Fixes**
   - `median()` no longer mutates input array (creates sorted copy)
   - `percentile()` no longer mutates input array (creates sorted copy)
   - `percentile()` now validates k parameter range [0, 1]

3. **New Functions Added**
   - `mode()` - Most frequently occurring value(s)
   - `range()` - Difference between max and min
   - `quartiles()` - Q1, Q2, Q3 values
   - `geometricMean()` - nth root of product
   - `harmonicMean()` - Reciprocal of mean of reciprocals

4. **Code Quality Improvements**
   - `average()` now uses `sum()` for DRY principle
   - `count()` simplified implementation
   - `variance()` calculation optimized
   - Consistent validation across all functions

### Post-v1.0.0 Additions

**correlation() Function:**
- Calculates Pearson correlation coefficient between two arrays
- Returns value in range [-1, 1]
- Validates both arrays have same length
- Checks for zero standard deviation (constant values)
- Comprehensive error handling for edge cases

**covariance() Function:**
- Calculates population covariance between two arrays
- Measures how two variables change together
- Validates array lengths match
- Proper handling of all error cases

## Next Steps

### Immediate Actions

1. **Release v1.1.1**
   - Update version in package.json
   - Move unreleased items to v1.1.1 section in CHANGELOG
   - Create git tag
   - Publish to npm
   - Create GitHub release with notes

2. **Documentation Review**
   - Verify all examples work correctly
   - Check TypeDoc generated docs are complete
   - Ensure migration guide is clear

### Short Term (Next Few Weeks)

1. **Performance Benchmarks**
   - Add correlation and covariance to benchmark suite
   - Document performance characteristics
   - Identify any optimization opportunities

2. **Community Engagement**
   - Monitor GitHub issues for bug reports
   - Review and respond to any questions
   - Consider feature requests

3. **Testing Enhancement**
   - Consider adding integration tests
   - Verify behavior across different Node.js versions
   - Test with different bundlers (webpack, rollup, esbuild)

## Active Decisions & Considerations

### Decision: Maintain CommonJS Only (For Now)

**Rationale:**
- Current CommonJS approach works well
- ESM support would require dual package setup
- Risk of breaking existing users
- Wait for stronger community demand

**Reconsidered When:**
- Significant user requests for ESM
- Node.js ESM adoption reaches critical mass
- Clear best practices for dual packages emerge

### Decision: Population vs Sample Statistics

**Current:** All functions use population formulas
- `variance()` - population variance
- `deviation()` - population standard deviation
- `covariance()` - population covariance

**Rationale:**
- Simpler API (no sample size parameter needed)
- Most common use case
- Sample versions can be added later without breaking changes

**Future Consideration:**
- Add `sampleVariance()`, `sampleDeviation()`, `sampleCovariance()`
- Clear naming distinguishes between population and sample
- Maintain backward compatibility

### Decision: Strict Error Handling

**Approach:** Fail fast with clear errors

**Rationale:**
- Data quality issues detected immediately
- No silent failures or incorrect results
- Clear error messages aid debugging
- TypeScript types + runtime validation = maximum safety

**Trade-off:**
- More verbose error handling code
- Users must handle errors explicitly
- No graceful degradation option

**Verdict:** Worth it for correctness and reliability

## Important Patterns & Preferences

### Code Style

**Prefer:**
- Explicit validation over assumptions
- Simple loops over functional methods (for performance)
- Clear variable names over brevity
- Comments explaining mathematical concepts
- JSDoc for all public functions

**Avoid:**
- Clever one-liners that sacrifice clarity
- External dependencies
- Breaking changes without major version bump
- Magic numbers (use named constants)

### Testing Philosophy

**Principles:**
1. Test normal operation with varied inputs
2. Test all error conditions explicitly
3. Test edge cases (single element, identical values, etc.)
4. Test non-mutation where applicable
5. Keep tests simple and readable

**Pattern:**
```typescript
test('functionName()', (t) => {
  // Normal cases
  t.equals(functionName([...]), expected, 'description');
  
  // Edge cases
  t.equals(functionName([single]), expected, 'single element');
  
  // Error cases
  t.throws(() => functionName([]), /Array cannot be empty/);
  t.throws(() => functionName([1, NaN]), /finite numbers/);
  
  t.end();
});
```

### Documentation Standards

**README.md Structure:**
1. Brief intro with badges
2. Installation instructions
3. Quick examples (TypeScript and CommonJS)
4. Complete API reference
5. Error handling documentation
6. Development instructions

**CHANGELOG.md:**
- Follow Keep a Changelog format
- Group changes: Added, Changed, Fixed, Deprecated, Removed
- Include migration guide for breaking changes
- Link to issues and PRs when relevant

## Learnings & Project Insights

### What Works Well

1. **One Function Per File**
   - Easy to find and modify code
   - Enables tree-shaking
   - Clear responsibility boundaries
   - Simple to test

2. **TypeScript Strict Mode**
   - Catches errors at compile time
   - Forces explicit types
   - Makes refactoring safer
   - Better IDE support

3. **Comprehensive Validation**
   - Users appreciate clear error messages
   - Catches data quality issues early
   - Reduces support burden
   - Builds trust in the library

4. **Zero Dependencies**
   - Fast installation
   - No security vulnerabilities from deps
   - Easy to audit
   - No version conflicts

### Challenges Overcome

1. **Array Mutation Bug (v0.x)**
   - Problem: `median()` and `percentile()` mutated input
   - Solution: Create sorted copy with `[...array].sort()`
   - Learning: Always consider side effects

2. **Inconsistent Error Handling (v0.x)**
   - Problem: Different functions handled errors differently
   - Solution: Standardized validation pattern across all functions
   - Learning: Consistency is crucial for good DX

3. **Error Messages (v0.x)**
   - Problem: Generic "Error" messages weren't helpful
   - Solution: Descriptive messages like "Array cannot be empty"
   - Learning: Good error messages are part of the API

### Patterns That Emerged

1. **Validation-First Pattern**
   - Always validate before computation
   - Consistent order: type → empty → elements
   - Same error types for same problems
   - Result: Predictable, safe API

2. **Function Composition**
   - `average()` uses `sum()`
   - `range()` uses `max()` and `min()`
   - `deviation()` uses `variance()`
   - `correlation()` uses `deviation()` and `covariance()`
   - Result: DRY principle, maintainable code

3. **Pure Functions**
   - No mutations
   - No side effects
   - Same input → same output
   - Result: Easy to test, predictable behavior

## Open Questions

### Should we support BigInt?

**Consideration:** Some users may need arbitrary precision

**Pros:**
- Support for very large numbers
- Exact integer arithmetic

**Cons:**
- Breaking change (number[] vs bigint[])
- Mixed number/bigint handling complex
- Most users don't need it

**Decision:** Not now, possibly separate package later

### Should we add streaming/incremental calculations?

**Use Case:** Large datasets that don't fit in memory

**Pros:**
- Handle unlimited data size
- Memory efficient

**Cons:**
- More complex API
- May require dependencies (for streaming)
- Different use case than current library

**Decision:** Separate package if needed (keep this one simple)

### Should we support weighted statistics?

**Examples:** Weighted mean, weighted variance

**Pros:**
- Common statistical need
- Natural extension

**Cons:**
- API complexity (additional parameter)
- Need to validate weights array
- More code to maintain

**Decision:** Consider for v2.0.0 if requested

## Communication Preferences

### When to Update Memory Bank

**Triggers:**
1. After implementing new features
2. After discovering important patterns
3. When architectural decisions are made
4. When user feedback reveals insights
5. After major refactoring
6. On explicit request: **update memory bank**

**Focus Areas:**
- activeContext.md: Current work, recent changes, active decisions
- progress.md: What's complete, what's remaining, known issues
- systemPatterns.md: New architectural patterns
- Other files: Only if foundational changes

### Code Review Checklist

Before considering work complete:
- [ ] Function implemented with validation
- [ ] Tests added (normal, edge cases, errors)
- [ ] TypeScript compiles without errors
- [ ] All tests pass
- [ ] Documentation updated (README, CHANGELOG)
- [ ] Type definitions correct
- [ ] No array mutations
- [ ] Consistent with existing patterns
- [ ] Performance acceptable
- [ ] Memory bank updated if significant

---

*This document tracks current work and active considerations. Update frequently as work progresses and decisions are made.*

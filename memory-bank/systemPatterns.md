# System Patterns - aggregatejs

**Last Updated:** 30/01/2026, 11:50 am (Europe/Riga, UTC+2:00)  
**Related:** [projectbrief.md](projectbrief.md) | [techContext.md](techContext.md)

---

## Architecture Overview

### High-Level Structure

```
aggregatejs/
├── src/                    # TypeScript source files
│   ├── index.ts           # Main entry point (exports all functions)
│   ├── average.ts         # Individual function modules
│   ├── correlation.ts
│   └── ...
├── dist/                  # Compiled JavaScript + type definitions
│   ├── index.js           # Main entry point (CommonJS)
│   ├── index.d.ts         # Type definitions
│   ├── average.js         # Individual compiled modules
│   └── ...
├── test/                  # Test files (mirror src/ structure)
│   ├── average.ts
│   ├── correlation.ts
│   └── ...
└── package.json           # Entry: dist/index.js, Types: dist/index.d.ts
```

### Module Architecture

**Pattern: One Function Per File**
```
src/functionName.ts → dist/functionName.js + dist/functionName.d.ts
```

**Benefits:**
- Clear separation of concerns
- Enables tree-shaking
- Easy to locate and modify individual functions
- Predictable file structure

## Key Technical Decisions

### 1. Module System Choice

**Decision:** CommonJS output, ES6 source modules

**Rationale:**
- Maximum compatibility with Node.js ecosystem
- Wide support across bundlers (webpack, rollup, etc.)
- Works with both `require()` and `import` syntax
- ES6 source enables modern TypeScript features

**Trade-offs:**
- ❌ No native ES modules (yet)
- ✅ Universal compatibility
- ✅ Well-tested in production

**Configuration:**
```json
// tsconfig.json
{
  "target": "ES2015",
  "module": "commonjs"
}
```

### 2. Import Patterns

**Pattern 1: Bulk Import (Convenience)**
```typescript
import { max, min, average } from 'aggregatejs';
```
- Entry point: `dist/index.js`
- Bundles all functions
- Good for: Multiple functions needed, Node.js backend

**Pattern 2: Individual Import (Optimization)**
```typescript
import average from 'aggregatejs/dist/average';
import max from 'aggregatejs/dist/max';
```
- Direct file import
- Minimal bundle size
- Good for: Frontend apps, single function usage

### 3. Type System Architecture

**Pattern: Strict TypeScript with Runtime Validation**

**Compile-Time Safety:**
```typescript
function average(array: number[]): number {
  // TypeScript ensures array is number[]
}
```

**Runtime Safety:**
```typescript
// Validate at runtime too (TypeScript types erased in JS)
if (!Array.isArray(array)) {
  throw new TypeError('Expected an array of numbers');
}

for (let i = 0; i < array.length; i++) {
  if (typeof array[i] !== 'number' || !isFinite(array[i])) {
    throw new TypeError('All array elements must be finite numbers');
  }
}
```

**Why Both?**
- TypeScript helps developers at dev time
- Runtime validation catches issues from JavaScript users
- Defense against malformed data at runtime
- Clear error messages for debugging

## Design Patterns

### 1. Input Validation Pattern

**Consistent across all functions:**

```typescript
export default function functionName(array: number[]): number {
  // Step 1: Check array type
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array of numbers');
  }
  
  // Step 2: Check empty array
  if (array.length === 0) {
    throw new RangeError('Array cannot be empty');
  }
  
  // Step 3: Validate all elements
  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number' || !isFinite(array[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }
  
  // Step 4: Function implementation
  // ...
}
```

**Critical Rules:**
1. Always check array type first
2. Always check empty array second
3. Always validate elements third
4. Use descriptive error messages
5. Use appropriate error types (TypeError vs RangeError)

### 2. Pure Function Pattern

**Rules:**
- No mutations of input arrays
- No side effects
- Same input always produces same output
- No external state dependencies

**Example - Median (v1.0.0+ fix):**
```typescript
// ❌ BAD (v0.x - mutates input)
export default function median(array: number[]): number {
  array.sort((a, b) => a - b); // MUTATES INPUT!
  // ...
}

// ✅ GOOD (v1.0.0+ - no mutation)
export default function median(array: number[]): number {
  const sorted = [...array].sort((a, b) => a - b); // Copy first
  // ...
}
```

### 3. DRY (Don't Repeat Yourself) Pattern

**Example - Average leverages Sum:**
```typescript
// sum.ts
export default function sum(array: number[]): number {
  // validation + implementation
}

// average.ts
import sum from './sum';

export default function average(array: number[]): number {
  // Only validate (sum() will validate too, but consistent)
  if (!Array.isArray(array)) { /* ... */ }
  if (array.length === 0) { /* ... */ }
  
  // Reuse sum logic
  return sum(array) / array.length;
}
```

**When to Apply:**
- Functions with clear dependencies (average depends on sum)
- Avoids duplicating complex logic
- Maintains single source of truth

**When NOT to Apply:**
- Keep functions independent when possible
- Avoid creating complex dependency chains
- Performance-critical paths may need duplication

### 4. Specialized Validation Pattern

**For functions with additional parameters:**

```typescript
// percentile.ts
export default function percentile(array: number[], k: number): number {
  // Standard array validation
  if (!Array.isArray(array)) { /* ... */ }
  if (array.length === 0) { /* ... */ }
  
  // Parameter-specific validation
  if (typeof k !== 'number' || !isFinite(k)) {
    throw new TypeError('k must be a finite number');
  }
  
  if (k < 0 || k > 1) {
    throw new RangeError('k must be between 0 and 1');
  }
  
  // Implementation
  // ...
}
```

### 5. Two-Array Function Pattern

**For correlation and covariance:**

```typescript
export default function correlation(arrayX: number[], arrayY: number[]): number {
  // Validate both arrays
  if (!Array.isArray(arrayX) || !Array.isArray(arrayY)) {
    throw new TypeError('Expected two arrays of numbers');
  }
  
  // Check length match
  if (arrayX.length !== arrayY.length) {
    throw new RangeError('Arrays must have the same length');
  }
  
  if (arrayX.length === 0) {
    throw new RangeError('Arrays cannot be empty');
  }
  
  // Validate elements in both
  for (let i = 0; i < arrayX.length; i++) {
    if (typeof arrayX[i] !== 'number' || !isFinite(arrayX[i]) ||
        typeof arrayY[i] !== 'number' || !isFinite(arrayY[i])) {
      throw new TypeError('All array elements must be finite numbers');
    }
  }
  
  // Implementation
  // ...
}
```

## Component Relationships

### Function Dependencies

```
Core Functions (No Dependencies):
├── count()
├── sum()
├── max()
├── min()

Dependent Functions:
├── average() → uses sum()
├── range() → uses max() and min()
├── deviation() → uses variance()
├── quartiles() → uses percentile()
├── correlation() → uses deviation() and covariance()
```

### Test Structure

**Pattern: Mirror source structure**
```
src/average.ts  →  test/average.ts
src/median.ts   →  test/median.ts
```

**Each test file covers:**
1. Normal operation with various inputs
2. Edge cases (single element, identical values)
3. Error throwing (empty array, NaN, Infinity)
4. Special behaviors (e.g., non-mutation)

## Critical Implementation Paths

### 1. Sorting-Based Functions

**Functions:** median, percentile, quartiles

**Pattern:**
```typescript
// Always create sorted copy (don't mutate input)
const sorted = [...array].sort((a, b) => a - b);

// Calculate based on sorted array
const mid = Math.floor(sorted.length / 2);
return sorted[mid];
```

**Complexity:** O(n log n)

### 2. Single-Pass Functions

**Functions:** sum, count, max, min, average, variance

**Pattern:**
```typescript
// Single iteration
let result = initialValue;
for (let i = 0; i < array.length; i++) {
  result = updateFunction(result, array[i]);
}
return result;
```

**Complexity:** O(n)

### 3. Frequency-Based Functions

**Functions:** mode

**Pattern:**
```typescript
// Build frequency map
const frequency = new Map<number, number>();
for (const num of array) {
  frequency.set(num, (frequency.get(num) || 0) + 1);
}

// Find max frequency and return all values with that frequency
```

**Complexity:** O(n)

### 4. Two-Pass Functions

**Functions:** variance, deviation, covariance, correlation

**Pattern:**
```typescript
// Pass 1: Calculate mean
const mean = average(array);

// Pass 2: Calculate deviations
let sumSquaredDiff = 0;
for (let i = 0; i < array.length; i++) {
  sumSquaredDiff += Math.pow(array[i] - mean, 2);
}
```

**Complexity:** O(n)

## Error Handling Architecture

### Error Type Strategy

**RangeError:** Invalid data range or size
- Empty arrays
- Parameters out of valid range (e.g., k not in [0,1])
- Arrays of different lengths

**TypeError:** Invalid data type
- Non-array input
- Non-numeric elements
- NaN values
- Infinity values
- Invalid parameter types

### Error Message Standards

**Format:** `"{What went wrong}"`

**Examples:**
- ✅ `"Array cannot be empty"`
- ✅ `"All array elements must be finite numbers"`
- ✅ `"k must be between 0 and 1"`
- ✅ `"Arrays must have the same length"`

**Guidelines:**
- Clear and specific
- Actionable (tells user what to fix)
- Consistent across all functions
- No technical jargon

## Performance Considerations

### Optimization Strategies

1. **Minimize Allocations**
   - Avoid unnecessary array copies except when needed (sorting)
   - Use simple loops instead of functional methods when faster

2. **Early Exit**
   - Validate input before heavy computation
   - Fail fast on invalid data

3. **Algorithm Selection**
   - Use O(n) algorithms where possible
   - Accept O(n log n) only when necessary (sorting)

4. **No Premature Optimization**
   - Code clarity over micro-optimizations
   - Optimize only proven bottlenecks

### Target Performance

- **Small datasets** (< 100 elements): < 1ms
- **Medium datasets** (1,000 elements): < 10ms
- **Large datasets** (100,000 elements): < 100ms

## Future Architecture Considerations

### Potential Enhancements

1. **ESM Support**
   - Add `"type": "module"` configuration
   - Dual package (CommonJS + ESM)
   - Maintain backward compatibility

2. **Streaming APIs**
   - Optional incremental calculation support
   - For large datasets that don't fit in memory
   - Separate package to maintain zero dependencies

3. **Sample vs Population**
   - Add sample variance/deviation variants
   - Clear naming: `variance()` vs `sampleVariance()`

---

*This document captures architectural decisions and patterns. Update when making significant structural changes or establishing new patterns.*

# Tech Context - aggregatejs

**Last Updated:** 30/01/2026, 11:51 am (Europe/Riga, UTC+2:00)  
**Related:** [projectbrief.md](projectbrief.md) | [systemPatterns.md](systemPatterns.md)

---

## Technology Stack

### Core Technologies

#### TypeScript 5.9.3
**Purpose:** Primary development language

**Configuration:** `tsconfig.json`
```json
{
  "compilerOptions": {
    "target": "ES2015",              // Broad compatibility
    "module": "commonjs",             // Node.js standard
    "lib": ["ES2015"],                // Core ES2015 features
    "declaration": true,              // Generate .d.ts files
    "declarationMap": true,           // Source maps for types
    "outDir": "./dist",               // Compiled output
    "rootDir": "./src",               // Source files
    "strict": true,                   // All strict checks enabled
    "esModuleInterop": true,          // CommonJS interop
    "skipLibCheck": true,             // Skip checking .d.ts files
    "forceConsistentCasingInFileNames": true,
    "moduleResolution": "node",       // Node.js resolution
    "resolveJsonModule": true         // Import JSON files
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "test"]
}
```

**Key Settings:**
- **Strict Mode Enabled**: Catches most common errors
- **ES2015 Target**: Modern syntax, wide compatibility
- **Declaration Maps**: Enable IDE navigation to source
- **CommonJS Output**: Maximum compatibility

#### Node.js
**Minimum Version:** Node.js 12+ (ES2015 support)

**Used For:**
- Runtime environment
- Test execution
- Build tooling
- NPM package distribution

### Development Dependencies

#### Testing Framework: Tape 4.6.3
**Why Tape:**
- Minimal, no magic
- TAP output (Test Anything Protocol)
- Simple assertion API
- Fast execution
- No global state

**Test Execution:**
```bash
# Run tests with TypeScript
ts-node node_modules/tape/bin/tape test/*.ts | tap-spec
```

**Pattern:**
```typescript
import test from 'tape';
import functionName from '../src/functionName';

test('functionName()', (t) => {
  t.equals(functionName([1, 2, 3]), expected, 'description');
  
  t.throws(() => {
    functionName([]);
  }, /Array cannot be empty/, 'throws on empty array');
  
  t.end();
});
```

#### Test Formatting: tap-spec 4.1.1
**Purpose:** Pretty-print TAP output

**Output Example:**
```
✓ functionName()
  ✓ calculates correct result
  ✓ throws on empty array
  ✓ throws on NaN
```

#### Type Definitions
- `@types/node@^20.19.30` - Node.js types
- `@types/tape@^5.8.1` - Tape types
- `@types/benchmark@^2.1.5` - Benchmark types (for performance tests)

#### TypeScript Execution: ts-node 10.9.2
**Purpose:** Run TypeScript files directly without compilation

**Used For:**
- Running tests
- Running performance benchmarks
- Development scripts

**Configuration:** Uses tsconfig.json automatically

#### Code Coverage: nyc 17.1.0
**Purpose:** Istanbul-based code coverage

**Configuration:** `.nycrc`
```json
{
  "extension": [".ts"],
  "include": ["src/**/*.ts"],
  "exclude": ["dist", "test"],
  "reporter": ["text", "lcov"],
  "all": true
}
```

**Usage:**
```bash
npm run test-cov      # Run tests with coverage
npm run report-cov    # Generate lcov report
```

#### Performance Testing: Benchmark 2.1.4
**Purpose:** Accurate performance measurements

**Structure:**
```
test/performance/
├── all.bench.ts           # Run all benchmarks
├── basic.bench.ts         # Basic statistics
├── positional.bench.ts    # Positional statistics
├── specialized.bench.ts   # Specialized functions
├── utils.ts               # Shared utilities
└── README.md              # Documentation
```

**Usage:**
```bash
npm run perf              # All benchmarks
npm run perf:basic        # Basic functions only
npm run perf:positional   # Positional functions only
npm run perf:specialized  # Specialized functions only
```

#### Documentation: TypeDoc 0.28.16
**Purpose:** Generate API documentation from TypeScript

**Configuration:** `typedoc.json`
```json
{
  "entryPoints": ["src/index.ts"],
  "out": "docs",
  "plugin": [],
  "excludePrivate": true,
  "excludeProtected": true
}
```

**Usage:**
```bash
npm run docs         # Generate documentation
npm run docs:watch   # Watch mode for development
```

**Output:** HTML documentation in `docs/` directory

### Runtime Dependencies

**Zero Runtime Dependencies** 🎉

This is a core principle of the project:
- No external packages at runtime
- Reduces supply chain risk
- Smaller package size
- Faster installation
- No version conflicts

## Build System

### Build Process

**Trigger:** `npm run build`

**Steps:**
1. TypeScript compiler (`tsc`) reads `tsconfig.json`
2. Compiles `src/**/*.ts` → `dist/**/*.js`
3. Generates `dist/**/*.d.ts` (type definitions)
4. Generates `dist/**/*.d.ts.map` (declaration maps)

**Output Structure:**
```
dist/
├── index.js          # Main entry point
├── index.d.ts        # Type definitions
├── index.d.ts.map    # Source map
├── average.js        # Individual function
├── average.d.ts      # Its types
└── ...               # All other functions
```

### Package Configuration

**package.json Key Fields:**
```json
{
  "name": "aggregatejs",
  "version": "1.1.1",
  "main": "dist/index.js",         // Entry point
  "types": "dist/index.d.ts",      // Type definitions
  "files": ["dist", "src"],        // Published files
  "scripts": {
    "build": "tsc",
    "prepare": "npm run build",    // Auto-build before publish
    "test": "ts-node node_modules/tape/bin/tape test/*.ts | tap-spec",
    "test-cov": "nyc npm test",
    "report-cov": "nyc report --reporter=text-lcov > coverage/lcov.info",
    "clean": "rm -rf dist"
  }
}
```

**Important:**
- `prepare` script runs automatically before `npm publish`
- `files` array controls what gets published to npm
- Both `dist` and `src` are published (for source maps)

## CI/CD Pipeline

### Cirrus CI

**Configuration:** `.cirrus.yml`

**Purpose:**
- Run tests on every commit
- Verify builds succeed
- Check code coverage
- Multi-environment testing

**Features:**
- Fast execution
- Free for open source
- Container-based
- Automatic PR checks

### Codecov

**Configuration:** `.codecov.yml`

**Purpose:**
- Track code coverage over time
- Coverage reports on PRs
- Coverage badges

**Integration:**
```bash
# After tests run in CI
npm run test-cov
npm run report-cov
# Upload coverage/lcov.info to Codecov
```

### GitHub Actions (Legacy)

**Configuration:** `.github/workflows/ci.yml`

**Status:** May be transitioning from Travis CI

**Workflow:**
1. Checkout code
2. Install dependencies
3. Run build
4. Run tests
5. Report coverage

## Development Setup

### Initial Setup

```bash
# Clone repository
git clone https://github.com/yefremov/aggregatejs.git
cd aggregatejs

# Install dependencies
npm install

# Build project
npm run build

# Run tests
npm test
```

### Development Workflow

```bash
# Make changes to src/functionName.ts

# Run tests (auto-compiles with ts-node)
npm test

# Build for distribution
npm run build

# Check coverage
npm run test-cov

# Run performance benchmarks
npm run perf

# Generate documentation
npm run docs

# Clean build artifacts
npm run clean
```

### Adding a New Function

1. **Create source file:** `src/newFunction.ts`
2. **Implement with validation:**
   ```typescript
   export default function newFunction(array: number[]): number {
     // Validation
     // Implementation
   }
   ```
3. **Export from index:** `src/index.ts`
   ```typescript
   export { default as newFunction } from './newFunction';
   ```
4. **Create test file:** `test/newFunction.ts`
5. **Run tests:** `npm test`
6. **Build:** `npm run build`
7. **Update documentation:** `README.md`, `CHANGELOG.md`

## Environment Requirements

### Development Environment

**Required:**
- Node.js 12+ (ES2015 support)
- npm or pnpm
- Git
- Text editor with TypeScript support

**Recommended:**
- VS Code with TypeScript extension
- npm 7+ (workspaces support)
- macOS, Linux, or WSL2 on Windows

### Production Environment

**Required:**
- Node.js 12+ (or any environment supporting ES2015)
- CommonJS module support

**Supported:**
- Node.js backend applications
- Webpack/Rollup/Parcel bundled applications
- Electron applications
- Any JavaScript runtime with CommonJS

**Not Supported (yet):**
- Pure ESM environments (without CommonJS compatibility)
- Browser environments (without bundler)
- Deno (without npm compatibility layer)

## Tool Usage Patterns

### TypeScript Compilation

**Development:** Via ts-node (no compilation step)
```bash
ts-node test/average.ts
```

**Production:** Via tsc (explicit compilation)
```bash
npm run build
```

**Watch Mode:** Not configured (build is fast enough)

### Testing Patterns

**Run All Tests:**
```bash
npm test
```

**Run Single Test:**
```bash
ts-node node_modules/tape/bin/tape test/average.ts | tap-spec
```

**Coverage Report:**
```bash
npm run test-cov
```

### Performance Testing

**Quick Check:**
```bash
npm run perf:basic
```

**Full Suite:**
```bash
npm run perf
```

**Dataset Sizes:**
- Small: 10 elements
- Medium: 1,000 elements
- Large: 100,000 elements
- Extra Large: 1,000,000 elements

## Dependencies Management

### Update Strategy

**Philosophy:** Conservative updates
- Security patches: Apply immediately
- Minor versions: Review changelog, test thoroughly
- Major versions: Evaluate breaking changes carefully

**Process:**
```bash
# Check for outdated packages
npm outdated

# Update dev dependencies (careful with breaking changes)
npm update --save-dev

# Run tests after updates
npm test

# Build and verify
npm run build
```

### Lock File

**file:** `package-lock.json`

**Commited:** Yes (ensures reproducible builds)

**Updates:** Automatic with `npm install`

## Technical Constraints

### Current Limitations

1. **CommonJS Only**
   - No ESM support yet
   - Can't use in pure ESM projects without compatibility

2. **Node.js Focus**
   - Not optimized for browsers
   - Requires bundler for web use

3. **Numeric Arrays Only**
   - No support for other data types
   - No missing value handling (NaN throws error)

4. **In-Memory Only**
   - All data must fit in memory
   - No streaming support

### Future Tech Considerations

1. **Dual Package (CommonJS + ESM)**
   - Maintain CommonJS for compatibility
   - Add ESM exports for modern environments
   - Challenge: Requires careful configuration

2. **Browser Bundle**
   - Optional UMD build
   - Would increase package size
   - May not align with zero-dependency goal

3. **Deno Support**
   - Currently works via npm compatibility
   - Could add native Deno support
   - Would require separate entry point

---

*This document tracks technical decisions and tooling. Update when changing build tools, dependencies, or technical requirements.*

/**
 * Run all performance benchmarks
 * 
 * This file orchestrates running all benchmark suites sequentially.
 * Each suite runs independently to avoid interference.
 */

import { execSync } from 'child_process';
import { resolve } from 'path';

const benchmarks = [
  'basic.bench.ts',
  'positional.bench.ts',
  'specialized.bench.ts',
];

console.log('\n╔════════════════════════════════════════════════╗');
console.log('║   AggregateJS Performance Benchmark Suite    ║');
console.log('╚════════════════════════════════════════════════╝\n');

benchmarks.forEach((benchmark, index) => {
  const benchPath = resolve(__dirname, benchmark);
  
  console.log(`\n[${ index + 1}/${benchmarks.length}] Running ${benchmark}...`);
  console.log('─'.repeat(50));
  
  try {
    execSync(`ts-node ${benchPath}`, {
      cwd: process.cwd(),
      stdio: 'inherit',
    });
  } catch (error) {
    console.error(`\n❌ Error running ${benchmark}:`, error);
    process.exit(1);
  }
});

console.log('\n╔════════════════════════════════════════════════╗');
console.log('║     All Performance Tests Complete! ✓         ║');
console.log('╚════════════════════════════════════════════════╝\n');

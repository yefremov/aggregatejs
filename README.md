# aggregatejs [![Build Status](https://travis-ci.org/yefremov/aggregatejs.svg?branch=master)](https://travis-ci.org/yefremov/aggregatejs) [![Coverage Status](https://coveralls.io/repos/github/yefremov/aggregatejs/badge.svg?branch=master)](https://coveralls.io/github/yefremov/aggregatejs?branch=master) [![npm version](https://badge.fury.io/js/aggregatejs.svg)](https://badge.fury.io/js/aggregatejs)

A comprehensive set of statistical and mathematical aggregation functions written in TypeScript.

## Installation

```bash
$ npm install aggregatejs
```

## Example

### TypeScript / ES6

```typescript
import { max, min, mode, quartiles } from 'aggregatejs';
// top-level exports can be imported individually (recommended)
import percentile from 'aggregatejs/dist/percentile';
import average from 'aggregatejs/dist/average';

max([100, -100, 150, -50, 250, 100]);
// => 250

min([100, -100, 150, -50, 250, 100]);
// => -100

mode([1, 2, 2, 3, 4]);
// => 2

quartiles([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// => { q1: 3, q2: 5, q3: 7 }
```

### CommonJS

```javascript
const { max, min, mode, quartiles } = require('aggregatejs');
const percentile = require('aggregatejs/dist/percentile').default;
const average = require('aggregatejs/dist/average').default;

max([100, -100, 150, -50, 250, 100]);
// => 250

min([100, -100, 150, -50, 250, 100]);
// => -100
```

## API

All aggregate functions expect an array of numbers and return computed values. **All functions throw errors for invalid input** (empty arrays, NaN, Infinity).

### Basic Statistics

#### average

Returns the arithmetic mean of the numbers in `array`.

```js
average([100, -100, 150, -50, 100, 250]);
// => 75
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### count

Counts the numbers in `array`.

```js
count([100, -100, 150, -50, 100, 250]);
// => 6
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### max

Returns the largest number in `array`.

```js
max([100, -100, 150, -50, 250, 100]);
// => 250
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### min

Returns the smallest number in `array`.

```js
min([100, -100, 150, -50, 250, 100]);
// => -100
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### sum

Returns the sum of all numbers in `array`.

```js
sum([100, -100, 150, -50, 100, 250]);
// => 450
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### range

Returns the difference between the maximum and minimum values in `array`.

```js
range([100, -100, 150, -50, 250, 100]);
// => 350 (250 - (-100))
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### mode

Returns the most frequently occurring value(s) in `array`. If multiple values have the same highest frequency, returns an array of all modes.

```js
mode([1, 2, 2, 3, 4]);
// => 2

mode([1, 1, 2, 2, 3]);
// => [1, 2]
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

### Positional Statistics

#### median

Returns the median (middle value) of the numbers in `array`. Does not mutate the input array.

```js
median([100, -100, 150, -50, 100, 250]);
// => 100
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### percentile

Returns the `k`-th percentile of values in `array`, where `k` is between 0 and 1. Does not mutate the input array.

```js
percentile([100, -100, 150, -50, 100, 250], 0.25);
// => -12.5

percentile([100, -100, 150, -50, 100, 250], 0.50);
// => 100

percentile([100, -100, 150, -50, 100, 250], 0.95);
// => 225
```

**Throws:**
- `RangeError` if array is empty or k is outside [0, 1] range
- `TypeError` if array contains non-numeric or non-finite values, or k is not a finite number

#### quartiles

Returns an object containing the first quartile (Q1), median (Q2), and third quartile (Q3) of the numbers in `array`.

```js
quartiles([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// => { q1: 3, q2: 5, q3: 7 }
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

### Dispersion Statistics

#### variance

Returns the population variance of the numbers in `array`.

```js
variance([2, 4, 4, 4, 5, 5, 7, 9]);
// => 4
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

#### deviation

Returns the standard deviation of the numbers in `array`.

```js
deviation([2, 4, 4, 4, 5, 5, 7, 9]);
// => 2
```

**Throws:**
- `RangeError` if array is empty
- `TypeError` if array contains non-numeric or non-finite values

### Specialized Means

#### geometricMean

Returns the geometric mean of the numbers in `array`. The geometric mean is the nth root of the product of n numbers.

```js
geometricMean([2, 8]);
// => 4

geometricMean([1, 3, 9, 27, 81]);
// => 9
```

**Throws:**
- `RangeError` if array is empty or contains negative numbers
- `TypeError` if array contains non-numeric or non-finite values

**Note:** Returns 0 if any value in the array is 0.

#### harmonicMean

Returns the harmonic mean of the numbers in `array`. The harmonic mean is the reciprocal of the arithmetic mean of reciprocals.

```js
harmonicMean([1, 2, 4]);
// => 1.7142857142857142

harmonicMean([2, 3]);
// => 2.4
```

**Throws:**
- `RangeError` if array is empty or contains zero
- `TypeError` if array contains non-numeric or non-finite values

## Error Handling

All functions in v1.0.0+ provide robust error handling:

- **Empty Arrays**: All functions throw `RangeError` with message "Array cannot be empty"
- **Invalid Input**: All functions throw `TypeError` with descriptive messages for:
  - Non-array inputs
  - Arrays containing `NaN`
  - Arrays containing `Infinity` or `-Infinity`
  - Non-numeric values
- **Invalid Parameters**: Functions like `percentile()` validate their parameters and throw appropriate errors

### Example Error Handling

```typescript
import { max } from 'aggregatejs';

try {
  max([]);
} catch (error) {
  console.error(error); // RangeError: Array cannot be empty
}

try {
  max([1, NaN, 3]);
} catch (error) {
  console.error(error); // TypeError: All array elements must be finite numbers
}
```

## Migration from v0.x to v1.0.0

See [CHANGELOG.md](CHANGELOG.md) for detailed migration instructions.

**Key Breaking Changes:**
- Empty arrays now throw errors instead of returning 0
- Invalid input (NaN, Infinity) now throws errors
- `median()` and `percentile()` no longer mutate input arrays

## Development

### Building

```bash
$ npm run build
```

### Running tests

```bash
$ npm test
```

### Clean build artifacts

```bash
$ npm run clean
```

## License

[MIT](LICENSE)

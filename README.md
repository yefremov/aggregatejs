# aggregatejs [![Build Status](https://travis-ci.org/yefremov/aggregatejs.svg?branch=master)](https://travis-ci.org/yefremov/aggregatejs) [![Coverage Status](https://coveralls.io/repos/github/yefremov/aggregatejs/badge.svg?branch=master)](https://coveralls.io/github/yefremov/aggregatejs?branch=master) [![npm version](https://badge.fury.io/js/aggregatejs.svg)](https://badge.fury.io/js/aggregatejs)

A set of statistical and mathematical aggregation functions written in JavaScript.

## Installation

```bash
$ npm install aggregatejs
```

## Example

```js
import { max, min } from 'aggregatejs';
// top-level exports can be imported individually (recommended)
import percentile from 'aggregatejs/percentile';
import average from 'aggregatejs/average';

max([100, -100, 150, -50, 250, 100]);
// => 250

min([100, -100, 150, -50, 250, 100]);
// => -100

percentile([100, -100, 150, -50, 100, 250], 0.25);
// => -12.5

average([100, -100, 150, -50, 100, 250]);
// => 75

```

## API

All aggregate functions are returning a value based on array of numbers:

### average

Returns the average of the numbers in `array`.

```js
let value = average([100, -100, 150, -50, 100, 250]);
// => 75
```

### count

Counts the numbers in `array`.

```js
let value = count([100, -100, 150, -50, 100, 250]);
// => 6
```

### max

Returns the largest number in `array`.

```js
let value = max([100, -100, 150, -50, 250, 100]);
// => 250
```

### min

Returns the smallest number in `array`.

```js
let value = min([100, -100, 150, -50, 250, 100]);
// => -100
```

### percentile

Returns the `k`-th percentile of values in `array`.

```js
let perc25 = percentile([100, -100, 150, -50, 100, 250], 0.25);
// => -12.5

let perc50 = percentile([100, -100, 150, -50, 100, 250], 0.50);
// => 100

let perc95 = percentile([100, -100, 150, -50, 100, 250], 0.95);
// => 225
```

### sum

Returns the sum of all numbers in `array`.

```js
let value = sum([100, -100, 150, -50, 100, 250]);
// => 450
```

### median

Returns the median of the numbers in `array`.

```js
let value = median([100, -100, 150, -50, 100, 250]);
// => 100
```

### variance

Returns the variance population of the numbers in `array`.

```js
let value = variance([2, 4, 4, 4, 5, 5, 7, 9]);
// => 4
```

### deviation

Returns the standard deviation of the numbers in `array`.

```js
let value = deviation([2, 4, 4, 4, 5, 5, 7, 9]);
// => 2
```

## Running tests

```bash
$ npm test
```

## License

[MIT](LICENSE)

# aggregatejs [![Build Status](https://travis-ci.org/yefremov/aggregatejs.svg?branch=master)](https://travis-ci.org/yefremov/aggregatejs) [![Coverage Status](https://coveralls.io/repos/github/yefremov/aggregatejs/badge.svg?branch=master)](https://coveralls.io/github/yefremov/aggregatejs?branch=master) [![npm version](https://badge.fury.io/js/aggregatejs.svg)](https://badge.fury.io/js/aggregatejs)

A set of statistical and mathematical aggregation functions written in JavaScript.

## Installation

```bash
$ npm install aggregatejs
```

## Example

```js
import average from 'aggregatejs/average';
import sum from 'aggregatejs/sum';

average([100, -100, 150, -50, 100, 250]);
// => 75

sum([100, -100, 150, -50, 100, 250]);
// => 450

```

## API

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
let value = percentile([100, -100, 150, -50, 100, 250], 0.50);
// => 100
```

### sum

Returns the sum of all numbers in `array`.

```js
let value = sum([100, -100, 150, -50, 100, 250]);
// => 450
```

## Running tests

```bash
$ npm test
```

## License

[MIT](LICENSE)

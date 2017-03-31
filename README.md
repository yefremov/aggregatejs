# aggregatejs [![Build Status](https://travis-ci.org/yefremov/aggregatejs.svg?branch=master)](https://travis-ci.org/yefremov/aggregatejs) [![Coverage Status](https://coveralls.io/repos/github/yefremov/aggregatejs/badge.svg?branch=master)](https://coveralls.io/github/yefremov/aggregatejs?branch=master) [![npm version](https://badge.fury.io/js/aggregatejs.svg)](https://badge.fury.io/js/aggregatejs)

A set of statistical and mathematical aggregation functions written in JavaScript.

## Installation

```bash
$ npm install aggregatejs
```

## Example

```js
const aggregate = require('aggregatejs');
const sum = require('aggregatejs/sum');

aggregate.average([100, -100, 150, -50, 100, 250]);
// => 75

sum([100, -100, 150, -50, 100, 250]);
// => 450

```

## Running tests

```bash
$ npm test
```

## License

[MIT](LICENSE)

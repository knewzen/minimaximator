# minMax method
A Node.js package that allows you to get the lowest and the highest number of an array with one function call.

[![Twitter](https://img.shields.io/twitter/follow/Xstoudi.svg?style=social&label=Follow%20@Xstoudi)](https://twitter.com/Xstoudi)

[![Travis](https://img.shields.io/travis/Xstoudi/minimaximator.svg)]()
[![npm](https://img.shields.io/npm/dt/minimaximator.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/Xstoudi/minimaximator/badge.svg?branch=master)](https://coveralls.io/github/Xstoudi/minimaximator?branch=master)

## Sponsor


## Example
Currently, if you have an array of numbers and you want to get the lowest and the highest number you have to:
```js
const nums = [12, 10, 25, 5]
const min = Math.min(nums)
const max = Math.max(nums)
console.log(min, max) // 5 25
```
...but with this lib, you are able to do:
```js
const { minMax } = require('minimaximator')
const nums = [12, 10, 25, 5]
const [min, max] = minMax(nums)
console.log(min, max) // 5 25
```

## Benchmark
There is benchmark in the `benchmark` folder that you can run.
Here is a typical example with 100 numbers:

```
Two calls x 146,444 ops/sec ±1.67% (86 runs sampled)
Minmax function x 5,693,000 ops/sec ±0.64% (90 runs sampled)
Fastest is Minmax function
```

And here is a typical example with 100000 numbers:
```
Two calls x 25.93 ops/sec ±7.60% (40 runs sampled)
Minmax function x 9,315 ops/sec ±0.44% (89 runs sampled)
Fastest is Minmax function
```

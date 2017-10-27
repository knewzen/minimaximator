# minMax method
A Node.js package that allows you to get the lowest and the highest number of an array with one function call.

[![Twitter](https://img.shields.io/twitter/follow/Xstoudi.svg?style=social&label=Follow%20@Xstoudi)](https://twitter.com/Xstoudi)

[![Travis](https://img.shields.io/travis/Xstoudi/minimaximator.svg)]()
[![NPM](https://img.shields.io/npm/Xstoudi/minimaximator.svg)]()
[![Coverage Status](https://coveralls.io/repos/github/Xstoudi/minimaximator/badge.svg?branch=master)](https://coveralls.io/github/Xstoudi/minimaximator?branch=master)

## Sponsor
<a target='_blank' rel='nofollow' href='https://app.codesponsor.io/link/RFZm26J558vLyi6jH9gt7X9F/Xstoudi/minimaximator'>
  <img alt='Sponsor' width='888' height='68' src='https://app.codesponsor.io/embed/RFZm26J558vLyi6jH9gt7X9F/Xstoudi/minimaximator.svg' />
</a>

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
Two calls x 133,210 ops/sec ±3.03% (85 runs sampled)
Minmax function x 1,394,442 ops/sec ±1.39% (90 runs sampled)
Fastest is Minmax function
```

And here is a typical example with 100000 numbers:
```
Two calls x 13.40 ops/sec ±4.17% (36 runs sampled)
Minmax function x 1,552 ops/sec ±1.48% (86 runs sampled)
Fastest is Minmax function
```
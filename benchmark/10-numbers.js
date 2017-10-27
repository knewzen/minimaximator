const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const { minMax } = require('../src/minimaximator')

const testCase = []
for (let x = 0; x < 10; ++x) {
  if (x === 4) {
    testCase.push(42)  // Expected min
  } else if (x === 13) {
    testCase.push(1337) // Expected max
  } else {
    testCase.push(Math.random() * 1000 + 42)
  }
}

suite
  .add('Two calls', () => {
    const min = Math.min(...testCase)
    const max = Math.max(...testCase)
  })
  .add('Minmax function', () => {
    const [min, max] = minMax(testCase)
  })
  .on('cycle', (event) => {
    console.log(String(event.target))
  })
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`)
  })
  .run({ 'async': true })

  /*

  Two calls x 999,200 ops/sec ±3.45% (81 runs sampled)
Minmax function x 19,485,017 ops/sec ±0.74% (89 runs sampled)
Fastest is Minmax function

*/
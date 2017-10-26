const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const { minMax } = require('../src/min-max')

const testCase = []
for (let x = 0; x < 1000; ++x) {
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
    const min = Math.min(testCase)
    const max = Math.min(testCase)
  })
  .add('Minmax function', () => {
    const [min, max] = minMax(testCase)
  })
  .on('cycle', (event) => {
    console.log(String(event.target));
  })
  .on('complete', function() {
    console.log(`Fastest is ${this.filter('fastest').map('name')}`);
  })
  .run({ 'async': true });
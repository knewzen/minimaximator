import test from 'ava'
import { minMax } from '../src/min-max.js'

test('If no argument was given to the function, return infinity', t => {
  t.deepEqual(minMax(), [Infinity, -Infinity])
})
test('Argument should be an array', t => {
  const error = t.throws(() => minMax('foo'), Error)
  t.is(error.message, 'Argument should be an array')
})
test('The array should', t => {
  const error = t.throws(() => minMax('foo'), Error)
  t.is(error.message, 'Argument should be an array')
})
test('Return an empty array if the given array is empty', t => {
  t.deepEqual(minMax([]), [])
})

test('Returned values are good', t => {
  const testCase = []
  for (let x = 0; x < 100000; ++x) {
    if (x === 4) {
      testCase.push(42)  // Expected min
    } else if (x === 13) {
      testCase.push(1337) // Expected max
    } else {
      testCase.push(Math.random() * 1000 + 42)
    }
  }

  const [min, max] = minMax(testCase)

  t.is(min, 42)
  t.is(max, 1337)
})
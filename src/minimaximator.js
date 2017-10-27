function minMax(x) {
  if (x === undefined)
    return [Infinity, -Infinity];

  if (Array.isArray(x) === false)
    throw new Error('Argument should be an array')

  if (x.length === 0)
    return []

  var min, max; min = max = Number(x[0]);

  for (var i = 1, num; i < x.length; i++) {
    num = Number(x[i]);
    if (num < min) min = num;
    if (num > max) max = num;
  }

  return [min, max];
}

module.exports = { minMax: minMax }
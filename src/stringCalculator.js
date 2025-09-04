function add(numbers) {
  if (numbers === "") return 0;
  const values = numbers.split(/,|\n/).map(Number);
  let sum = 0;
  for (let v of values) sum += v;
  return sum;
}

module.exports = { add };

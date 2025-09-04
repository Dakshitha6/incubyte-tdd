function add(numbers) {
  if (numbers === "") return 0;

  const values = numbers.split(",").map(Number);
  if (values.length === 1) return values[0];

  return values[0] + values[1];
}

module.exports = { add };

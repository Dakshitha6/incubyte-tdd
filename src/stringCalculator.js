function add(numbers) {
  if (numbers === "") return 0;

  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const values = numbers.split(delimiter).map(Number);
  const negativeNumbers = values.filter((v) => v < 0);
  if (negativeNumbers.length > 0) {
    throw new Error(
      "Negative numbers not allowed " + negativeNumbers.join(",")
    );
  }

  let sum = 0;
  for (let v of values) sum += v;
  return sum;
}

module.exports = { add };

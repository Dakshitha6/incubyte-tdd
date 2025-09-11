function add(numbers) {
  if (numbers === "") return 0;

  let isMultiply;
  let delimiter = /,|\n/;
  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    isMultiply = parts[0].slice(2) == "*" ? true : false;
    if (isMultiply) {
      delimiter = new RegExp("\\*");
    } else {
      delimiter = new RegExp(parts[0].slice(2));
    }
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
  if (isMultiply) {
    let prod = 1;
    for (let val of values) prod *= val;
    return prod;
  }
  for (let v of values) sum += v;
  return sum;
}

module.exports = { add };

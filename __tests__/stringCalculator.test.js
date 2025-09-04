const { add } = require("../src/stringCalculator");

test("Empty string => returns 0", () => {
  expect(add("")).toBe(0);
});

test("Single number => returns its value", () => {
  expect(add("1")).toBe(1);
});

test("Two numbers, comma separated => returns its sum", () => {
  expect(add("1,5")).toBe(6);
});

test("Any amount of numbers => returns its sum", () => {
  expect(add("1,2,3,4")).toBe(10);
});

test("Newlines as separators => returns its sum", () => {
  expect(add("1\n2,3")).toBe(6);
});

test("Custom single char delimiter  => returns its sum", () => {
  expect(add("//;\n1;2")).toBe(3);
});

test("Negative numbers throw and list all negatives", () => {
  expect(() => add("1,-2,3,-4")).toThrow("Negative numbers not allowed -2,-4");
});

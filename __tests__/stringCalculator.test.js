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

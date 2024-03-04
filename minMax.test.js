const { min, max } = require("./minMax");

// Test for the min function
test("min function returns the smaller value between two numbers", () => {
  expect(min(3, 7)).toBe(3); // Test with positive numbers
  expect(min(-5, 10)).toBe(-5); // Test with negative numbers
  expect(min(0, 0)).toBe(0); // Test with equal numbers
});

// Test for the max function
test("max function returns the larger value between two numbers", () => {
  expect(max(3, 7)).toBe(7); // Test with positive numbers
  expect(max(-5, 10)).toBe(10); // Test with negative and positive numbers
  expect(max(0, 0)).toBe(0); // Test with equal numbers
});

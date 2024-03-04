// Hausaufgabe 2

const { min, max } = require("./minMax");

// Test der min-Funktion
test("min function returns the smaller value between two numbers", () => {
  expect(min(3, 7)).toBe(3); // Test mit positiven Zahlen
  expect(min(-3, -7)).toBe(-7); // Test mit negativen Zahlen
  expect(min(-5, 10)).toBe(-5); // Test mit negativen und positiven Zahlen
  expect(min(0, 0)).toBe(0); // Test mit gleichen Zahlen
});

// Test der max-Funktion
test("max function returns the larger value between two numbers", () => {
  expect(max(3, 7)).toBe(7); // Test mit positiven Zahlen
  expect(max(-3, -7)).toBe(-3); // Test mit negativen Zahlen
  expect(max(-5, 10)).toBe(10); // Test Test mit negativen und positiven Zahlen
  expect(max(0, 0)).toBe(0); // Test mit gleichen Zahlen
});

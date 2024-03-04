const calculator = require("./calculator");

test("Die Summe von 2 + 5 ist 7", () => {
  const result = calculator.sum(2, 5);

  expect(result).toEqual(7);
});

test('Die Summe von "Apfel" + 5 ist "Apfel5"', () => {
  const result = calculator.sum("Apfel", 5);

  expect(result).toEqual("Apfel5");
});

test("Der Quotient aus 10 durch 2 ist 5", () => {
  const result = calculator.divide(10, 2);

  expect(result).toEqual(5);
});

test("Der Quotient aus 10 durch 3 ist nahe an 3,33", () => {
  const result = calculator.divide(10, 3);

  expect(result).toBeCloseTo(3.33, 2);
});

test("Postive durch negative Zahl ist kleiner als 0", () => {
  const result = calculator.divide(10, -2);

  expect(result).toBeLessThan(0);
});

test("Negativ durch negative Zahl ist größer als 0", () => {
  const result = calculator.divide(-10, -2);

  expect(result).toBeGreaterThan(0);
});

// Hausaufgabe 1

// Test der subtract-Funktion

// Test: Beide Zahlen sind positiv
test("Beide Zahlen sind positiv", () => {
  const result = calculator.subtract(5, 3);
  expect(result).toEqual(2);
});

// Test: Eine Zahl ist negativ (a negativ)
test("Eine Zahl ist negativ (a negativ)", () => {
  const result = calculator.subtract(-5, 3);
  expect(result).toEqual(-8);
});

// Test: Eine Zahl ist negativ (b negativ)
test("Eine Zahl ist negativ (b negativ)", () => {
  const result = calculator.subtract(5, -3);
  expect(result).toEqual(8);
});

// Test: Eine Zahl ist 0
test("Eine Zahl ist 0", () => {
  const result = calculator.subtract(0, 5);
  expect(result).toEqual(-5);
});

// Test der multiply-Funktion

// Test: Beide Zahlen sind positiv
test("Beide Zahlen sind positiv", () => {
  const result = calculator.multiply(5, 3);
  expect(result).toEqual(15);
});

// Test: Eine Zahl ist negativ (a negativ)
test("Eine Zahl ist negativ (a negativ)", () => {
  const result = calculator.multiply(-5, 3);
  expect(result).toEqual(-15);
});

// Test: Eine Zahl ist negativ (b negativ)
test("Eine Zahl ist negativ (b negativ)", () => {
  const result = calculator.multiply(5, -3);
  expect(result).toEqual(-15);
});

// Test: Eine Zahl ist 0
test("Eine Zahl ist 0", () => {
  const result = calculator.multiply(0, 5);
  expect(result).toEqual(0);
});

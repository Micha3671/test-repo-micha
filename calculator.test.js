const calculator = require("./calculator");

describe("Calculator Tests", () => {
  describe("Sum Function", () => {
    test("soll die Summe von zwei positiven Zahlen zurückgeben", () => {
      // Arrange
      // Act
      const result = calculator.sum(2, 5);
      // Assert
      expect(result).toEqual(7);
    });

    test("soll einen String und eine Zahl verketten", () => {
      // Arrange
      // Act
      const result = calculator.sum("Apfel", 5);
      // Assert
      expect(result).toEqual("Apfel5");
    });
  });

  describe("Divide Function", () => {
    test("soll den Quotienten von zwei positiven Zahlen zurückgeben", () => {
      // Arrange
      // Act
      const result = calculator.divide(10, 2);
      // Assert
      expect(result).toEqual(5);
    });

    test("soll den Quotienten von zwei Zahlen mit Genauigkeit zurückgeben", () => {
      // Arrange
      // Act
      const result = calculator.divide(10, 3);
      // Assert
      expect(result).toBeCloseTo(3.33, 2);
    });

    test("soll ein negatives Ergebnis zurückgeben, wenn eine positive Zahl durch eine negative Zahl dividiert wird", () => {
      // Arrange
      // Act
      const result = calculator.divide(10, -2);
      // Assert
      expect(result).toBeLessThan(0);
    });

    test("soll ein positives Ergebnis zurückgeben, wenn zwei negative Zahlen dividiert werden", () => {
      // Arrange
      // Act
      const result = calculator.divide(-10, -2);
      // Assert
      expect(result).toBeGreaterThan(0);
    });
  });

  describe("Subtract Function", () => {
    test("soll die Differenz zweier positiver Zahlen zurückgeben", () => {
      // Arrange
      // Act
      const result = calculator.subtract(5, 3);
      // Assert
      expect(result).toEqual(2);
    });

    test("soll die Differenz zurückgeben, wenn eine Zahl negativ ist (a negativ)", () => {
      // Arrange
      // Act
      const result = calculator.subtract(-5, 3);
      // Assert
      expect(result).toEqual(-8);
    });

    test("soll die Differenz zurückgeben, wenn eine Zahl negativ ist (b negativ)", () => {
      // Arrange
      // Act
      const result = calculator.subtract(5, -3);
      // Assert
      expect(result).toEqual(8);
    });

    test("soll die negative Zahl zurückgeben, wenn von Null subtrahiert wird", () => {
      // Arrange
      // Act
      const result = calculator.subtract(0, 5);
      // Assert
      expect(result).toEqual(-5);
    });
  });

  describe("Multiply Function", () => {
    test("soll das Ergebnis von zwei positiven Zahlen zurückgeben", () => {
      // Arrange
      // Act
      const result = calculator.multiply(5, 3);
      // Assert
      expect(result).toEqual(15);
    });

    test("soll das Ergebnis zurückgeben, wenn eine Zahl negativ ist (a negativ)", () => {
      // Arrange
      // Act
      const result = calculator.multiply(-5, 3);
      // Assert
      expect(result).toEqual(-15);
    });

    test("soll das Ergebnis zurückgeben, wenn eine Zahl negativ ist (b negativ)", () => {
      // Arrange
      // Act
      const result = calculator.multiply(5, -3);
      // Assert
      expect(result).toEqual(-15);
    });

    test("soll Null zurückgeben, wenn mit Null multipliziert wird", () => {
      // Arrange
      // Act
      const result = calculator.multiply(0, 5);
      // Assert
      expect(result).toEqual(0);
    });
  });
});

const { min, max } = require("./minMax");

describe("Min and Max Functions", () => {
  describe("min Function", () => {
    test("soll den kleineren Wert zwischen zwei Zahlen zurückgeben", () => {
      // Arrange
      const a = 3;
      const b = 7;

      // Act
      const result = min(a, b);

      // Assert
      expect(result).toBe(a);
    });

    test("soll den kleineren Wert zwischen zwei negativen Zahlen zurückgeben", () => {
      // Arrange
      const a = -3;
      const b = -7;

      // Act
      const result = min(a, b);

      // Assert
      expect(result).toBe(b);
    });

    test("soll den kleineren Wert zwischen einer negativen und einer positiven Zahl zurückgeben", () => {
      // Arrange
      const a = -5;
      const b = 10;

      // Act
      const result = min(a, b);

      // Assert
      expect(result).toBe(a);
    });

    test("soll den kleineren Wert zurückgeben, wenn beide Zahlen gleich sind", () => {
      // Arrange
      const a = 0;
      const b = 0;

      // Act
      const result = min(a, b);

      // Assert
      expect(result).toBe(a);
    });
  });

  describe("max Function", () => {
    test("soll den größeren Wert zwischen zwei Zahlen zurückgeben", () => {
      // Arrange
      const a = 3;
      const b = 7;

      // Act
      const result = max(a, b);

      // Assert
      expect(result).toBe(b);
    });

    test("soll den größeren Wert zwischen zwei negativen Zahlen zurückgeben", () => {
      // Arrange
      const a = -3;
      const b = -7;

      // Act
      const result = max(a, b);

      // Assert
      expect(result).toBe(a);
    });

    test("soll den größeren Wert zwischen einer negativen und einer positiven Zahl zurückgeben", () => {
      // Arrange
      const a = -5;
      const b = 10;

      // Act
      const result = max(a, b);

      // Assert
      expect(result).toBe(b);
    });

    test("soll den größeren Wert zurückgeben, wenn beide Zahlen gleich sind", () => {
      // Arrange
      const a = 0;
      const b = 0;

      // Act
      const result = max(a, b);

      // Assert
      expect(result).toBe(a);
    });
  });
});

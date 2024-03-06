const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });
  test("Test for age being less than 0", () => {
    expect(() => {
      isAdult(-1);
    }).toThrow("Age cannot be smaller than 0");
  });

  test("Test for age being 0", () => {
    expect(isAdult(0)).toBe(false);
  });

  test("Test for age being between 1 and 17", () => {
    expect(isAdult(1)).toBe(false);
    expect(isAdult(10)).toBe(false);
    expect(isAdult(17)).toBe(false);
  });

  test("Test for age being greater than 18", () => {
    expect(isAdult(19)).toBe(true);
    expect(isAdult(100)).toBe(true);
  });

  test("Test for non-number input", () => {
    expect(() => {
      isAdult("not a number");
    }).toThrow("Input is not a number");
  });
});

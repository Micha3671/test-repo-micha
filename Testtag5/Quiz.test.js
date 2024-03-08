const { isRightSolutionForQuestion } = require("./Quiz");

describe("isRightSolutionForQuestion Funktion", () => {
  it("soll true zurückgeben, wenn die Antwort für Frage 1 korrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_1",
      "Weil er immer kalt gelötet ist."
    );
    expect(result).toBe(true);
  });

  it("soll false zurückgeben, wenn die Antwort für Frage 1 inkorrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_1",
      "This is not the correct answer"
    );
    expect(result).toBe(false);
  });

  it("soll einen ReferenceError werfen, wenn der Frage-Schlüssel nicht existiert", () => {
    expect(() => {
      isRightSolutionForQuestion("invalid_key", "Some answer");
    }).toThrow(ReferenceError);
  });

  it("soll einen TypeError werfen, wenn die Antwort kein String ist", () => {
    expect(() => {
      isRightSolutionForQuestion("frage_1", 12345);
    }).toThrow(TypeError);
  });
});

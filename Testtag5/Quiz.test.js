const { isRightSolutionForQuestion } = require("./Quiz");

describe("isRightSolutionForQuestion Funktion", () => {
  it("soll true zurückgeben, wenn die Antwort für Frage 1 korrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_1",
      "Weil er immer kalt gelötet ist."
    );
    expect(result).toBe(true); // Deckt Zeilen 38-39 ab
  });

  it("soll false zurückgeben, wenn die Antwort für Frage 1 inkorrekt ist", () => {
    const result = isRightSolutionForQuestion(
      "frage_1",
      "This is not the correct answer"
    );
    expect(result).toBe(false); // Deckt Zeilen 38-41 ab
  });

  it("soll einen ReferenceError werfen, wenn der Frage-Schlüssel nicht existiert", () => {
    expect(() => {
      isRightSolutionForQuestion("invalid_key", "Some answer");
    }).toThrow(ReferenceError); // Deckt Zeile 34 ab
  });

  it("soll einen TypeError werfen, wenn die Antwort kein String ist", () => {
    expect(() => {
      isRightSolutionForQuestion("frage_1", 12345);
    }).toThrow(TypeError); // Deckt Zeilen 35-36 ab
  });
});

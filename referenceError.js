// Folgender Code wirft einen ReferenceError
try {
  meineLieblingsFunktion();
} catch (error) {
  console.error("Ein Fehler ist aufgetreten:", error);
} finally {
  console.log("Hallo Welt");
}

const zahl = 1024;

try {
  zahl.map((item) => {
    console.log(item);
  });
} catch (error) {
  console.error("Ein Fehler ist aufgetreten:", error);
} finally {
  console.log("Hallo Welt");
}

// Hausaufgabe 2

// min(a, b) : gibt den kleineren Wert (also a oder b) zurück
function min(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else {
    // a und b sind gleich
    return a; // oder return b;
  }
}

// max(a, b) : gibt den größeren Wert (also a oder b) zurück
function max(a, b) {
  if (a > b) {
    return a;
  } else if (a < b) {
    return b;
  } else {
    // a und b sind gleich
    return a; // oder return b;
  }
}

// Exportieren der Funktionen
module.exports = {
  min,
  max,
};

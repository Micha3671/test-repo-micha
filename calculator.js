function sum(a, b) {
  const result = a + b;
  return result;
}

function divide(a, b) {
  return a / b;
}

// Hausaufgabe 1 //

// Funktion zum subtrahieren von zwei Zahlen
function subtract(a, b) {
  return a - b;
}

// Funktion zum multiplizieren von zwei Zahlen
function multiply(a, b) {
  return a * b;
}

// Im Browser/in Javascript: export default ...
// Wir sind hier aber in NodeJS!
module.exports.sum = sum;
module.exports.divide = divide;

module.exports.subtract = subtract;
module.exports.multiply = multiply;

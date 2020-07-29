// Math Operators in JavaScript.
// + - / * %

var number1 = 10;
var number2 = 2;

// Addition
var sum = number1 + number2;

// Subtraction
var difference = number1 - number2;
var differenceBackwards = number2 - number1;

// Multiplication
var product = number1 * number2;

// Division
var quotient = number1 / number2;
var quotientBackwards = number2 / number1;

// Modulo
var remainder = number1 % number2;

console.log("The numbers used are " + number1 + " and " + number2 + "." );

console.log("Sum: " + sum);
console.log("Difference: " + difference + ", Backwards: " + differenceBackwards);
console.log("Product: " + product);
console.log("Quotient: " + quotient);
console.log("Quotient reversed: " + quotientBackwards);
console.log("Left overs: " + remainder);
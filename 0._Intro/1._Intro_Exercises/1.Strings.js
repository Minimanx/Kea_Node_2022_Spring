// --------------------------------------
// Exercise 1 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------

console.log(parseFloat(numberOne) + parseFloat(numberTwo))
//alternatively
let result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result);

// --------------------------------------
// Exercise 2 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

let anotherResult = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);

console.log(anotherResult);

// --------------------------------------
// Exercise 3 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

let average = one + two + three / 3;
console.log(average.toFixed(5))



// --------------------------------------
// Exercise 4 - Get the character by index

const letters = "abc";
// Get me the character "c"

let letter = letters.split("")[2];
let alsoLetter = letters.charAt(2);
console.log(letter);
console.log(alsoLetter);


// --------------------------------------
// Exercise 5 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

let factCapital = fact.replace("javascript", "Javascript");

console.log(factCapital);


// --------------------------------------




const score = 400
// console.log(score);
// console.log(typeof score); // Check type of score


const balance = new Number(100)
// console.log(balance);
// console.log(balance.toString()); // Convert to string
// console.log(balance.toString().length); // Length of string
// console.log(balance.toFixed(2)); // Format to 2 decimal places

const otherNumber = -123.456
// console.log(otherNumber.toPrecision(2)); // Format to 2 significant digits

 const hundreds = 1000000
//  console.log(hundreds.toLocaleString('en-IN')); // Format with commas

// +++++++++++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-400)); // Absolute value
// console.log(Math.round(4.6)); // Round to nearest integer
// console.log(Math.ceil(4.1)); // Round up
// console.log(Math.floor(4.9)); // Round down
// console.log(Math.min(1, 2, 3, 4, 5)); // Minimum value
// console.log(Math.max(1, 2, 3, 4, 5)); // Maximum value
console.log(Math.floor((Math.random()*10) + 1)); // Random number between 1 and 10 inclusive  both ends //   integer value
console.log((Math.random()*10)+1); // Random number between 1 inclusive and 11 exclusive // float value

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // Random number between 10 and 20 inclusive both ends // integer value



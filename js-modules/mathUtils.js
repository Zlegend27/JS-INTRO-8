
// Arrow function

module.exports.getRandomNumber = (start, end) => Math.floor(Math.random() * (end - start + 1) + start);

module.exports.sum = (num1, num2) => num1 + num2;

module.exports.average = (num1, num2) => (num1 + num2) / 2;
// Create a function that takes 2 numbers as arguments and return their average

// Function Expression 
const average = function(num1, num2) {
    console.log((num1 + num2) / 2);
}


// One of the ways to export is exporting functions or properties one by one

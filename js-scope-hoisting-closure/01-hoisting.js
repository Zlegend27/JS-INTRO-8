

// Globally declared and assigned 3 variables


// Check if you can access this info here

var x = 10;

// check if you can access this info here

// This is Hoisting
// JS moves declaration of the variables created with var to the top of the file but not the value
// -if you try to retirve a var value before it's assignment you will get undefined instead of referenceError

// var x;

// console.log(y) // error - reference error cannot access 'y' before initialization

let y = 11;

// regular function decleration
function funcA() {
    console.log('This is function A');
}

// Function Expression
const funB = function () {
    console.log('This is function B');
}

// Arrow Functions 
const funcC = () => {
    console.log('This is function C');
}

// Invoking all the functions
funcA();
funB();
funcC();
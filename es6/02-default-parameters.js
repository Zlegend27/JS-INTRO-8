// write a function that takes a string name, and logs 'Hello {name}'

function greet(str = 'NoName') {
    console.log(`Hello ${str}`);
}

greet('Alex');
greet();


function multiply(num1 = 10, num2 = 7) {
    console.log(num1 * num2);
}

multiply(3, 5); // 15
multiply(3);    // 21
multiply();     // 70


// Write a function that takes 3 arguments
// first arg is a number
// 2md arg is number
// 3rd is a boolean

// function name is add or subtract
// if the boolean is true add the given numbers
// if the boolean is false subtract the given numbers
// if the boolean is not proivded still add the numbers

function addOrSubtract(num1, num2, boolean = true) {
    if(boolean === true) console.log(num1 + num2);
    else console.log(num1 - num2);
}

const addOrSubtract = (num1, num2, boolean = true) => ? console.log(num1 + num2) : console.log(num1 num2);
addOrSubtract(2, 3, false);
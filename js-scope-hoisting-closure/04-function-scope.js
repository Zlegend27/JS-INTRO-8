// Function Scope was introduced before ES6
// It is similar to block scope but with one difference. The difference is var keyword acts exactly same as let and const


// Function Scope

function anyFunction() {
    var x = 10;
    let y = 11;
    const z = 12;

    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
console.log(y);
console.log(z);


// Real example
/* 
Write a function that takes an array and returns how many numbers are even

countEven([1, 2, 3, 4, 5]) --> 2
countEven([0, 0, 0, 0, 0]) --> 5

*/

function countEven(arr) {
    let counter = 0;

    for(const number of arr) {
        if(number % 2 === 0) counter++;
    }
    return counter;
}

console.log(counter); // Error - ReferenceError: counter is not defined
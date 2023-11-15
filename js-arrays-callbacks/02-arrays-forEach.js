const names = ['John', 'Jane', 'Alex', 'Max'];



// Print each name to the console

names.forEach((name) => console.log(name));

 
// Output first letter of each name

names.forEach((name) => console.log(name[0]));

names.forEach((name) => console.log(name.toUpperCase()));

// Output names that starts with J -> John and Jane


names.forEach((n) => {
    if(n.toLowerCase().startsWith('j')) {
        console.log(n);
    }
});

// Count how many names have 4 letters ->

let count = 0;

names.forEach((name) => {
if(name.length === 4) count++;
});

console.log(count);

names.forEach((name) => name.length === 4 ? count++ : count);

console.log(count);

// reduce() method will fit this question better



const numbers = [5, 10, 3, 0, -2];

// Print each number

// Print each number multiplied by 5

numbers.forEach((num) => console.log(num));

numbers.forEach((num) => console.log(num * 5));



// Print true for even numbers and false for odd numbers -> false, true, false, true, true

//3rd
numbers.forEach((x) => {
    if(x % 2 === 0) console.log(true);
    else console.log(false);
});

// 2nd 
numbers.forEach((x) => x % 2 === 0 ? console.log(true) : console.log(false));

//1st
numbers.forEach(x => console.log(x % 2 === 0));


// Create a new array that multiplies each of the numbers element by 3 -> [ 15, 30, 9, 0, -6 ]
const num = [];
numbers.forEach((x) => num.push(x * 3));

console.log(num);

// map() method will fit this question better

console.log(numbers.map(number => number * 3));


// create a new array that stores even numbers -> [10, 0, -2]
const even = [];
numbers.forEach((x) => x % 2 === 0 ? even.push(x) : x);

console.log(even);
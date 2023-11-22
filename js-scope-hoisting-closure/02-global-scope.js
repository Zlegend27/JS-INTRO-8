// Globally declared array 
const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];

// Print each element to console
for (const fruit of fruits) {
    console.log(fruit);
}


// count how many elements has 'apple ignoring cases  --> 2
let countApple = 0;

for (const fruit of fruits) {
    if (fruit.toLowerCase().includes('apple')) countApple++;
}

console.log(countApple); // 2 

function print() {
    console.log(fruits);
}

print(); // [ 'Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon' ]


var x = 10;
let y = 11;
const z = 12;

// Global access is allowed
console.log(x); // 10
console.log(y); // 11
console.log(z); // 12

// Block access is allowed
// access them in a block
{
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
}

// Access them in a function - IIFE
(function random() {
    console.log(x); // 10
    console.log(y); // 11
    console.log(z); // 12
})();
 

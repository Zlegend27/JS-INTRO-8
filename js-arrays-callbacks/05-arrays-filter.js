const numbers = [-5, 0, 5, 10, 23, -10];

// Find all the positive numbers -> [5, 10, 23]

console.log(numbers.filter((x) => x > 0));

console.log(numbers.filter((number) => number % 2 !== 0));


const num0 = [];
console.log(numbers.filter((x) => {
    if(x < 0) num0.push(0);
    else num0.push(x);
}))

console.log(num0);


console.log(numbers.map((number) => number < 0 ? 0 : number));



const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon'];
// Find all the fruits that starts with M   -> [ 'Mango', 'Melon' ]
// Find all the fruits that has apple  -> [ 'Apple', 'Pineapple' ]
// Find all the fruits that has length of 5  -> [ 'Apple', 'Mango', 'Melon' ]
// Find all the fruits that has length different than 5  -> [ 'Orange', 'Kiwi', 'Pineapple' ]
// Find all the fruits that has a or e  -> [ 'Apple', 'Orange', 'Pineapple', 'Mango', 'Melon' ]

console.log(fruits.filter((x) => x[0] === 'M'));
console.log(fruits.filter((x) => x.toLowerCase().includes('apple')));
console.log(fruits.filter((x) => x.length === 5));
console.log(fruits.filter((x) => x.length !== 5));
console.log(fruits.filter((x) => x.toLowerCase().includes('a') || x.toLowerCase().includes('e')));


// Count how many fruits ends with e  -> 3

console.log(fruits.filter(x => x[x.length-1] === 'e').length);


// Store the first and last letters of the fruits as shown -> ['Ae', 'Oe', 'Ki', 'Pe', 'Mo', 'Mn']

console.log(fruits.map((x) => x[0] + x[x.length-1]));
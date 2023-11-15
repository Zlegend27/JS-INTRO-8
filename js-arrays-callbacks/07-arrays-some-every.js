const numbers = [-5, 0, 5, 10, 23, -10];

// Check if some elements are divisble by 5
console.log(numbers.some(x => x % 5 ===0));


// check if some elements are even and odd
console.log(numbers.some(x => x % 2 === 0));
console.log(numbers.some(x => x % 2 !== 0));

// check if every element is positive 
// check if every element is negitive
console.log(numbers.every(x => x > 0));
console.log(numbers.every(x => x < 0));

const cities = ['Rome', 'Kyiv', 'Paris', 'Milan'];

// Check if every city has 4 or 5 letters   -> true
console.log(cities.every(x => x.length >= 4 && x.length <= 5));
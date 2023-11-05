/*
Assume you are given an array that stores numbers
Count how many positive numbers you have in the below array     -> 4
*/

const numbers = [-7, -2, 0, -2, 0, 5, 5, 10, 100, 0];

console.log('\n-----------Counting Numbers-------------\n');

let countP = 0;
for(const num of numbers) {
    if(num > 0) countP++;
} 
 
console.log(countP); 

console.log('\n-----------Counting Numbers-------------\n');

let countEvan = 0;
 
for(const number of numbers) {
    if(number % 2 === 0) countEvan++;
} 
 
console.log(countEvan); 
 
console.log('\n-----------Counting Numbers-------------\n');

let countMod = 0; 
 
for(const num of numbers) {
    if(num % 5 === 0) countMod++;
} 
 
console.log(countMod++);
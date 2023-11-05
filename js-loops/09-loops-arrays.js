/*
Assume you are given an array that stores numbers
Find the sum of all numbers         -> 28
Find the average of the numbers     -> 4
Find the sum of numbers that has even index
*/

const numbers = [3, 4, 7, 3, 2, 2, 7]; 
 
let sum = 0;

for(const number of numbers) {
    sum += number;
} 
 
console.log(sum);

console.log(sum / numbers.length);

sum = 0;

let sumOfEvenIndex = 0;
let index = 0;

for(const num of numbers) {
    if(index % 2 === 0) sumOfEvenIndex += num;
    index++;
}
console.log(sumOfEvenIndex);
sum = 0;

for(let i = 0; i <= numbers.length-1; i++){
    if(i % 2 === 0) sum += numbers[i];
} 
 
console.log(sum); 
 
const nums = [3, 4, 7, 3, 2]; // find the multiplication of all numbers
let product = 1;

for(let i = 0; i < nums.length; i++) {
    product *= nums[i];
} 

for(const num of nums) {
    product *= num;
}

console.log(product); 
 
product = 1;
for(let i = 0; i <= nums.length-1; i++) {
    if(i % 2 !== 0) product *= nums[i];
} 
 
console.log(product);


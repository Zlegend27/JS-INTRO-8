// Task 1 
 
let str1 = '5', str2 = '2'; 
 
console.log(`The sum of ${str1} and ${str2} is = ${Number(str1) + Number(str2)}`);
console.log(`The product of ${str1} and ${str2} is = ${Number(str1) * Number(str2)}`);
console.log(`The division of ${str1} and ${str2} is = ${Number(str1) / Number(str2)}`);
console.log(`The subtraction of ${str1} and ${str2} is = ${Number(str1) - Number(str2)}`);
console.log(`The remainder of ${str1} and ${str2} is = ${Number(str1) % Number(str2)}`);
console.log(`The exponentiation of ${str1} and ${str2} is = ${Number(str1) ** Number(str2)}`); 
 
// Task 2 
 
let s1 = '200', s2 = '-50';
 
console.log('The greatest value is = ', Math.max(s1, s2));
console.log('The smallest value is = ', Math.min(s1, s2)); 
console.log('The average is = ', (Number(s1) + Number(s2))/2); 
console.log('The absolute difference is = ', Math.abs(s1 - s2));
 
// Task 3  
  
let random1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1;
let random2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
 
console.log('The absolute differnce between numbers is = ', Math.abs(random1 - random2)); 
 
// Task 4 
  
let r1 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
let r2 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
let r3 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
let r4 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
let r5 = Math.floor(Math.random() * (50 - 1 + 1)) + 1; 
 
console.log('The max value = ', Math.max(r1, r2, r3, r4, r5));
console.log('The min value = ', Math.min(r1, r2, r3, r4, r5)); 
 
// Task 5  
 
let rand1 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let rand2 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
let rand3 = Math.floor(Math.random() * (100 - 50 + 1) + 50);
 
console.log('The number 1 = ', rand1);
console.log('The number 2 = ', rand2);
console.log('The number 3 = ', rand3);
console.log('The sum of the numbers is = ', rand1 + rand2 + rand3); 
 
// Task 6  
 
let ran1 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ran2 = Math.floor(Math.random() * (100 - 1 + 1) + 1);
let ran3 = Math.floor(Math.random() * (100 - 1 + 1) + 1); 
 
console.log(ran1 > 25 && ran2 > 25 && ran3 > 25); 
 
// Task 7 

let name = 'David'; 
 
console.log('The length of the name is = ', name.length);
console.log('The first charecter in the name is = ', name[0]); 
console.log('The last charecter in the name is = ', name[name.length-1]); 
console.log('The first 3 charecters in the name are = ', name.slice(0, 3));
console.log('The last 3 charecters in the name are = ', name.slice(-3)); 

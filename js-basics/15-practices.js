/*
Find the sum, subtraction, multiplication, division and remainder of these 2 numbers.
*/

let num1 = 6;
let num2 = 4; 
 
console.log(num1 + num2); // 10 
console.log(num1 - num2); // 2
console.log(num1 * num2); // 24
console.log(num1 / num2); // 1.5
console.log(num1 % num2); // 2 
 
// TRICKY part 
console.log('2' + '5'); // '25'
console.log('2' + 7); // '27'
console.log('2' + 2 + 5); // '225'
console.log('3' + 5 - 2); // 33 - interpreted language and will be able to convert string 35 into a number and solve the problem
console.log('3a' + 5 - 2); // NAN 
 
console.log(2 + 3 + '5'); // '55' 
console.log(6 - 3 + 5 * 2 + '10'); // '1310' 
 
/* 
Assume that you are given a rectangle with width = 5 and height = 8 
 
calculate the area and perimeter of the rectangle

*/ 
 
let width = 5, height = 8; 
 
console.log('area = ' + width * height);
console.log('perimeter = ' + (width * 2 + height * 2)); 
 
/*
An annual average salary for an SDET in the Unites States is 120k. 
Write a program that calculates and prints the monthly and bi-weekly and weekly average amount that 
an SDET makes in the United States.

Annual average salary = $120,000.00
1 year = 12 months
1 year = 52 weeks
Biweekly = every other week
*/

let salary = 120000;  

let monthly = salary / 12;  
let weekly = monthly / 4; 
let biWeekly = monthly / 2; 
 
console.log('The monthly salary is = ' + monthly);
console.log('The weekly salary is = ' + weekly);
console.log('The biweekly salary is = ' + biWeekly);


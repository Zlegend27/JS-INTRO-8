/* 
  
1. 
Requirement:
Write a program that generates a random number between 0 and 50 (both 0 and 50 are included)

Multiply number with 5 and print the result with below message

Expected result:
The random number * 5 = {result}

*/ 
 

console.log('The random number * 5 = ' + 5 * (Math.floor(Math.random() * (50 - 0 + 1)) + 0));  
 
/*    
    Solution: 
    
    console.log('The random number * 5 = ' + 5 * (Math.floor(Math.random() * (50 - 0 + 1)) + 0));
     
    Pseudo Code: 
     
    1. Find random number between 0 and 50 (both inclusive) 
    2. Multiply that number with 5 
    3. Log that result
 
*/ 
 
/*   

2.
Requirement:
Write a program that generates a random number between 50 and 100 (both 50 and 100 are included)

Find the remainder of the number by 10

Expected result:
The random number % 10 = {result}
 
*/ 
 
console.log('The random number % 10 = ' + (Math.floor(Math.random() * (100 - 50 + 1)) + 50) % 10); 
 
/*    
    Solution: 
    
    console.log('The random number % 10 = ' + (Math.floor(Math.random() * (100 - 50 + 1)) + 50) % 10);
     
    Pseudo Code: 
     
    1. Find random number between 50 and 100 (both inclusive) 
    2. Modulas that number by 10 
    3. Log that result
 
*/   
 
/*  
3. 
Requirement:
Write a program that generates 4 random numbers as below;
1st  number to be between 1 and 25 (both included)
2nd number to be between 26 and 50 (both included)
3rd number to be between 51 and 75 (both included)
4th number to be between 76 and 100 (both included)

Find the absolute difference between the max and min number
Find the absolute difference between the second and third number
Find the average of all 4 numbers

Expected result:
Difference of max and min = {result}
Difference of second and third = {result}
Average of all = {average}
 
*/ 
 
const r1 = (Math.random() * (25 - 1 + 1)) + 1;
const r2 = (Math.random() * (50 - 26 + 1)) + 26;
const r3 = (Math.random() * (75 - 51 + 1)) + 51;
const r4 = (Math.random() * (100 - 76 + 1)) + 76;  
 
let max = Math.max(r1, r2, r3, r4); 
let min = Math.min(r1, r2, r3, r4); 
  
console.log('Difference of max and min = ' + Math.abs(min - max));  
 
console.log('Difference of second and third = ' + Math.abs(r3 - r2));

console.log('Average of all = ' + (r1 + r2 + r3 + r4) / 4);  



/*    

    Solution:   

const r1 = (Math.random() * (25 - 1 + 1)) + 1;
const r2 = (Math.random() * (50 - 26 + 1)) + 26;
const r3 = (Math.random() * (75 - 51 + 1)) + 51;
const r4 = (Math.random() * (100 - 76 + 1)) + 76;  
 
let max = Math.max(r1, r2, r3, r4); 
let min = Math.min(r1, r2, r3, r4); 
  
console.log('Difference of max and min = ' + Math.abs(min - max));  
 
console.log('Difference of second and third = ' + Math.abs(r3 - r2));

console.log('Average of all = ' + (r1 + r2 + r3 + r4) / 4);  
    
console.log('The random number % 10 = ' + (Math.floor(Math.random() * (100 - 50 + 1)) + 50) % 10);
     
    Pseudo Code: 
     
    1. Find 4 random numbers 
    2. Find abs difference between max and min  
    3. Find abs difference between second and third
    4. Find average of all 4
 
*/   
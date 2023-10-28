/* 
 -- decrement 
 ++ increment 
  
 used to increase or descrease the value of a variable by 1 
*/ 
 
let num = 5;
 
num ++; // post-increment increase it by 1 but not at this line. So the value
 
console.log(num); // 6
 
let num2 = 10; 
 
num2 --; // decrease it by 1
 
console.log(num2); // 9 
 
// post-increment vs pre-increment 
let a = 5, b = 5; 
 
let x = a++; //  post-increment: a is still 5
let y = ++b; // pre-increment: b is already 6
 
console.log(a); // 6
console.log(x); // 5 
 
console.log(b); // 6 
console.log(y); // 6
 
// loops 
 
let n1 = 3; // n1 = 3
 
++n1;  // n1 = 4
 
let n2 = n1++; // n1 = 4, n2 = 4
 
n2++; //n2 = 4
 
console.log(n1); // n1 = 5 -- 5 
console.log(n2); // n2 = 5 -- 5 
 
let number1 = 1, number2 = 3; 
 
number1 += ++number2;// num 2 = 14, num 1 = 25
 
let number3 = --number1; 
 
number3--; 
 
console.log(number1);
console.log(number2);
console.log(number3);
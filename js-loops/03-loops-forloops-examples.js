let school = 'TechGlobal'; 
 
for(let i = 0; i <= 9; i++) { 
    console.log(school[i]);
}
 
for(let i = 0; i <= school.length-1; i++){
    console.log(school[i]);
} 
 
let counterL = 0;

for(let i = 0; i <= school.length-1; i++){
    if(school[i] === 'l') counterL ++;
} 
console.log(counterL);

  
 
// count a but ignore cases

 
let str = 'APPLE Pineapple';  
 
let counterP = 0; 
 
for(let i = 0; i <= str.length-1; i++) {
    if(str[i].toLowerCase() === 'p') counterP ++;
} 
 
console.log(counterP); 
 
/*
Write a program that outputs numbers from 1 to 30 (both inclusive)
        If number is divided by 3, then output "Fizz" instead of number
        if number is divided by 5, then output "Buzz" instead pf number
        if number is divided by both 3 and 5, then output "FizzBuzz"
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
.
29
FizzBuzz
*/

for(let i = 1; i <= 30; i++) {
    if(i % 5 === 0 && i % 3 === 0) console.log('FizzBuzz');
    else if(i % 5 === 0) console.log('Buzz');
    else if(i % 3 === 0) console.log('Fizz');
    else console.log(i);
}
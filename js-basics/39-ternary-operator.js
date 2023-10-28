/* 
Game club 
 
People who has a game starting with J can be part of this Game club 
 
John -> 'You can join the club'
Alex -> 'SORRY! You are out'
 */ 
 
let name = 'John'; 
 
if(name[0] === 'J') { 
    console.log('You can join the club');
} 
else { 
    console.log('SORRY! You are out');
} 
 
name[0] === 'J' ? console.log('You can join the club') : console.log('SORRY! You are out'); 
 
/*  
Naming a baby 
 
boy = Sam 
girl = Julie 
 
Girl = 'F'
Boy = 'M'
 
*/ 
 
let gender = ''; 
 
gender === 'F' ? console.log('Julie') : console.log('Sam');
 

// Ternary instead of ladder statements 
/*  
Assume you are given a number and will print 
POSITIVE if the number is greater than zero 
NEGATIVE if the number is smaaller than zero 
ZERO if the number is zero  
*/ 
 
let num = Math.floor(Math.random() * 11) - 5; // this returns a random number bt -5 and 5 
 
console.log(`The random number is = ${num}.`);
 
let result = num > 0 ? 'POSITIVE' : num < 0 ? 'NEGATIVE' : 'ZERO'; 
 
console.log(result);
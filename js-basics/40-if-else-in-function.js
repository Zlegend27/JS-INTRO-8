/*
Write function that takes a name and check if it starts with 'E' or 'e' and returns a boolean
Function name is startE.
NOTE: If the given name is empty -> then return false

startE('Emily') -> true
startE('emily') -> true 
startE('Alex') -> false 
startE('') -> false
*/


function startE(str) { 
    if(str.toLowerCase()[0] === 'e') return true;
    else return false;
} 
 
console.log(startE('Emily'));
let b2 = startE('emily'); 
 
console.log(b2); 
 
/* 
Write a function called fooBar which takes a number and return a string or a number.
if the given number is divisble by 5 --> return 'foo'
if the given number is divisible by 7 --> return 'bar'
if the given number is divisble both by 5 and 7 --> return 'foobar'
if the numbers is not divisble by 5 or 7 --> return the same number back 
 
fooBar(2) --> 2 
foobar(3) --> 3 
fooBar(5) --> 'foo'
fooBar(10) --> 'foo' 
fooBar(14) --> 'bar' 
fooBar(0) --> 'foobar' 
 
*/ 
 
function fooBar(num) { 
    if(num % 5 === 0 && num % 7 === 0) return 'foobar';
    else if(num % 5 === 0) return 'foo';
    else if(num % 7 === 0) return 'bar';
     
    return num;
}
 
console.log(fooBar(35));
console.log(fooBar(5)); 
console.log(fooBar(10));
console.log(fooBar(3)); 
 
/*  
write a function called getGrade which takes a number as the grade and returns a letter as a grade
0-100  
  
90-100          -> 'A'
80-89           -> 'B'
70-79           -> 'C'
60-69           -> 'D'
less than 60    -> 'F'

getGrade(90) -> 'A' 
getGrade(89) -> 'B' 
getGrade(80) -> 'B' 
getGrade(79) -> 'C' 
getGrade(70) -> 'C' 
getGrade(69) -> 'D' 
getGrade(60) -> 'D' 
getGrade(59) -> 'F' 

getGrade(95) -> 'A' 
getGrade(83) -> 'B' 
getGrade(23) -> 'F' 
getGrade(67) -> 'D'

*/ 
 
function getGrade(score) { 
    if(score >= 90) return 'A';
    else if(score >= 80) return 'B';
    else if(score >= 70) return 'C';
    else if(score >= 60) return 'D';
    
    return 'F';
} 
 
console.log(getGrade(288)); 
 

/*
Find if sum of 2 random numbers is even or not.

Write a program that generates 2 random numbers between 1 and 10 (both inclusive).
If the sum of the random numbers is even, print true.
Otherwise, print false. 

*/ 
 

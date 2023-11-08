// Task 1
/* 
Write a program that outputs all the numbers that are 
divisible by 7 starting from 1 to 100 (both inclusive).
Expected Output:
7 
14
21
.
.
.
.
91
98 
*/  
 
for(let i = 1; i <= 100; i++) {
    if(i % 7 === 0) console.log(i);
}
 
console.log('\n-----------Task 2 -------------\n');
 
// Task 2  
/* 
Write a program that outputs all the numbers that are 
divisible by both 2 and 3 starting from 1 to 50 (both 
inclusive).
Expected Output:
6
12
18 
.
.
36
42
48 
*/ 

for(let i = 1; i <= 50; i++) {
    if( i % 2 === 0 && i % 3 === 0) console.log(i);
}

console.log('\n-----------Task 3 -------------\n');

// Task 3 
/* 
Write a program that outputs all the numbers that are 
divisible by 5 starting from 100 to 50 (both inclusive).
Expected Output:
100
95
90
85
.
.
.
60
55
50 
*/ 

for(let i = 100; i >= 50; i--) {
    if(i % 5 === 0) console.log(i);
}

console.log('\n-----------Task 4 -------------\n');
// Task 4
/* 
Write a program that outputs the squares of all numbers 
starting from 0 to 7 (both inclusive).
NOTE: Use loop!!!
Expected Output:
The square of 0 is =  0
The square of 1 is =  1
The square of 2 is =  4
The square of 3 is =  9
The square of 4 is =  16
The square of 5 is =  25
The square of 6 is =  36
The square of 7 is =  49
*/ 

for(let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i* i} `);
}


console.log('\n-----------Task 5 -------------\n');

// Task 5 
/* 
Write a program that finds sum of the numbers starting 
from 1 to 10 (both inclusive).
Calculation => 1+2+3+4+5+6+7+8+9+10
NOTE: Use loop!!!
Expected Output:
55
*/

sum = 0;
for(let i = 1; i <= 10; i++) {
    sum += i;
}
console.log(sum);

console.log('\n-----------Task 6 -------------\n');

// Task 6 
/* 
Write a program generates a random number between 
1 and 10 (both inclusive).
And find the factorial of the number.
Mathematically, the factorial of a non-negative integer n 
is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
For example:
5! = 5 × 4 × 3 × 2 × 1 = 120
4! = 4 × 3 × 2 × 1 = 24
0! (by convention) is defined as 1
*/ 


console.log('\n-----------Task 7 -------------\n');

//Task 7 
/*
Write a program generates a random number between 
1 and 100 (both inclusive).
Keep generating a new number till you get a number 
that is divisible by 5.
The program should also count how many attempts it 
takes to generate such a number.
Eventually, print the random number divisible by 5 with 
the number of attempts as below.
Expected Output:
The random number is {randomNumber} and it took 
{attempts} attempt/s to generate it.
*/ 
 
let ranNum; 
let count = 0; 
 
do {
    ranNum = Math.floor(Math.random() * 100) + 1;
    count++;
    if(ranNum % 5 === 0) console.log(`The random number is ${ranNum}`);
} while (ranNum % 5 !== 0) 

console.log(`and it took ${count} attempt/s to generate it`);

console.log('\n-----------Task 8 -------------\n');

// Task 8 
/* 
-Create an array that stores countries below.
Germany, Argentina, Ukraine, Romania
THEN:
-Output the entire array
-Ouput the entire array sorted lexicographically
Expected Result:
['Germany', 'Argentina', 'Ukraine', 'Romania' ]
[ 'Argentina', 'Germany', 'Romania', 'Ukraine' ]
*/

let arr = ['Germany', 'Argentina', 'Ukraine', 'Romania'];

console.log(arr.sort());



// Task 9 
/*
-Create a String array that stores cartoon dogs below
Scooby Doo, Snoopy, Blue, Pluto, Dino, Sparky 
THEN:
-Output the entire array
-Then, check if the array has Pluto element
if it has Pluto, then output true
if it does not have Pluto, output false
Expected Result:
[ 'Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky' ]
true
*/ 
 




// Task 10 
/*
Create an array that stores cartoon cats below.
Garfield, Tom, Sylvester, Azrael
THEN:
-Output the entire array sorted lexicographically
-Then, check if the array has both Garfield and Felix
if it has both, then output true
if it does not have both, output false
Expected Result:
[ 'Azrael', 'Garfield', 'Sylvester', 'Tom' ]
false
*/
 
const arr2 = ['Garfield', 'Tom', 'Sylvester', 'Azrael'];


if(arr2.includes('Garfield') && arr2.includes('Felix')) {
    console.log(true);
    console.log(arr2.sort());
}
else {
    console.log(false);
    console.log(arr2.sort());
}




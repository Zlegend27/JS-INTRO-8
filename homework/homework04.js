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

for (let i = 1; i <= 100; i++) {
    if (i % 7 === 0) console.log(i);
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

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0 && i % 3 === 0) console.log(i);
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

for (let i = 100; i >= 50; i--) {
    if (i % 5 === 0) console.log(i);
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

for (let i = 0; i <= 7; i++) {
    console.log(`The square of ${i} is = ${i * i} `);
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
for (let i = 1; i <= 10; i++) {
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
    if (ranNum % 5 === 0) console.log(`The random number is ${ranNum}`);
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


console.log('\n-----------Task 9 -------------\n');

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

const str = ['Scooby Doo', 'Snoopy', 'Blue', 'Pluto', 'Dino', 'Sparky']

for (const pet of str) {
    if (pet.toLowerCase().includes('pluto')) console.log(true);
}


console.log('\n-----------Task 10 -------------\n');

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


if (arr2.includes('Garfield') && arr2.includes('Felix')) {
    console.log(true);
    console.log(arr2.sort());
}
else {
    console.log(false);
    console.log(arr2.sort());
}

console.log('\n-----------Task 11 -------------\n')

// Task 11
/*
-Create an array that stores numbers below
10.5, 20.75, 70, 80, 15.75
THEN:
-Output the entire array
-Ouput each element
Expected Result:
[ 10.5, 20.75, 70, 80, 15.75 ]
10.5
20.75
70
80
15.75
*/

const arr3 = [10.5, 20.75, 70, 80, 15.75];

console.log(arr3);
for (const array of arr3) {
    console.log(array);
}

console.log('\n-----------Task 12 -------------\n')

// Task 12 
/*
-Create an array that stores objects below.
Pen, notebook, Book, paper, bag, pencil, Ruler
THEN:
-Output the entire array.
-Output how many elements starts with 'B' or 'P', 
ignoring cases.
-Output how many elements has 'book' or 'pen' partial 
strings, ignoring cases.
Expected Result:
['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler' ]
Elements starting with 'B' or 'P' = 5
Elements having 'book' or 'pen' = 4
*/

const arr4 = ['Pen', 'notebook', 'Book', 'paper', 'bag', 'pencil', 'Ruler'];
let count1 = 0;
let count2 = 0;

for (array of arr4) {
    if (array.toLowerCase().startsWith('b') || array.toLowerCase().startsWith('p')) count1++;
    if (array.toLowerCase().includes('book') || array.toLowerCase().includes('pen')) count2++;

}

console.log(arr4);
console.log('Elements starting with B or P = ' + count1);
console.log('Elements having book or pen = ' + count2);

console.log('\n-----------Task 13 -------------\n')

// Task 13 
/*
-Create an array that stores numbers below.
3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78
THEN:
-Output the entire array
-Output how many elements are more than 10
-Output how many elements are less than 10
-Output how many elements are 10
Expected Result:
[ 3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78 ]
Elements that are more than 10 = 5
Elements that are less than 10 = 4
Elements that are 10 = 2
*/

const arr5 = [3, 5, 7, 10, 0, 20, 17, 10, 23, 56, 78];
let count10 = 0;
let count10_less = 0;
let counting10 = 0;

for (const array of arr5) {
    if (array > 10) count10++;
    if (array < 10) count10_less++;
    if (array === 10) counting10++;
}
console.log(arr5);
console.log('Elements that are more than 10 = ' + count10);
console.log('Elements that are less than 10 = ' + count10_less);
console.log('Elements that are 10 = ' + counting10);

console.log('\n-----------Task 14 -------------\n')

// Task 14
/*
-Create 2 arrays that stores numbers below.
First array->  [ 5, 8, 13, 1, 2 ]
Second array ->  [ 9, 3, 67, 1, 0 ]
THEN:
-Output both arrays
–Then, create a new array that will take the greatest 
value of same index from first 2 arrays and output the 
third array as well.
Expected Result:
1st array is =  [ 5, 8, 13, 1, 2 ]
2nd array is = [ 9, 3, 67, 1, 0 ]
3rd array is =  [ 9, 8, 67, 1, 2 ]
*/

const arr6 = [5, 8, 13, 1, 2];
const arr7 = [9, 3, 67, 1, 0];
const arr8 = [];

for (const array of arr6) {

    for (const arr of arr7) {
        if (arr > array) arr8.push(arr);
        else arr8.push(array);
    }
}

console.log(arr8);


// Task 15
/*
Write a function named as firstDuplicate() which takes an 
array argument and returns the first duplicated number in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return -1 if there are no duplicates in the array. For two 
elements to be considered as duplicated, value and data types 
of the elements must be same.
Examples:
firstDuplicate([ 3, 7, 10, 0, 3, 10 ]) -> 3
firstDuplicate([ 5, 7, 7, 0, 5, 10 ]) -> 5
firstDuplicate([ 5, '5', 3, 7, 4 ]) -> -1
firstDuplicate([ 123, 'abc', '123', 3, 'abc' ]) -> 'abc'
firstDuplicate([ 1, 2, 3]) -> -1
firstDuplicate([ 'foo', 'abc', '123', 'bar’ ])  -> -1
*/




// Task 16
/*
Write a function named as getDuplicates() which takes an 
array argument and returns all the duplicated elements in the 
array when invoked.
NOTE: Make your code dynamic that works for any array and 
return empty array if there are no duplicates in the array. For 
two elements to be considered as duplicated, value and data 
types of the elements must be same.
Examples:
getDuplicates([ 0, -4, -7, 0, 5, 10, 45, -7, 0 ]) -
> [ 0, -7 ]
getDuplicates([ 1, 2, 5, 0, 7 ]) -> [ ]
getDuplicates(['A', 'foo', '12’ , 12, 'bar', 'a', 'a', 'foo' ]) -
> [ 'foo', 'a’ ]
getDuplicates([ 'foo', '12' , 12, 'bar', 'a' ]) -
> [ ]
*/



// Task 17
/*
Write a function named as reverseStringWords() which takes a string 
as an argument and returns string back with each word separately 
reversed when invoked.
NOTE: Make your code dynamic that works for any string. Make sure you 
consider extra spaces before and after words in the given string.
Examples:
reverseStringWords("Hello World")  -> "olleH dlroW"
reverseStringWords("I like JavaScript")  -> "I ekil tpircSavaJ"
reverseStringWords("Hello")  -> "olleH"
reverseStringWords("")  -> ""
reverseStringWords("    ")  -> ""
*/

function reverseStringWords(str) {
    const string = str.split(' ');
    const arr = [];
    for (const rev of string) {
        arr.push(rev);
        arr.reverse();
    }
    console.log(arr);
};

reverseStringWords('Wow thats awsome');

// Task 18
/*
Write a function named as getEvens() which takes 2 number 
arguments and returns all the even numbers as an array 
stored from smallest even number to greatest even number 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no even numbers in the 
range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getEvens(2, 7) -> [ 2, 4, 6 ]
getEvens(17, 5) -> [ 6, 8, 10, 12, 14, 16 ]
getEvens(4, 4) -> [ 4 ]
getEvens(3, 3) -> [ ]
*/

function getEvens(num, num2) {
    const even = [];
    for (i = Math.min(num, num2); i <= Math.max(num, num2); i++) {
        if (i % 2 === 0) even.push(i);
    }
    console.log(even);
}

getEvens(2, 7);


// Task 19
/*
Write a function named as getMultipleOf5() which takes 2 
number arguments and returns all the numbers divisible by 5 
as an array stored from first found match to last found match 
when invoked.
NOTE: Make your code dynamic that works for any numbers 
and return empty array if there are no numbers divisible by 5 
in the range of given 2 numbers. 
Assume you will not be given negative numbers.
Examples:
getMultipleOf5(3, 17) -> [ 5, 10, 15]
getMultipleOf5(23, 5) -> [ 20, 15, 10, 5 ]
getMultipleOf5(5, 5) -> [ 5 ]
getMultipleOf5(2, 4) -> [ ]
*/

function getMultipleOf5(num, num2) {
    const div5 = [];
    if (num <= num2) {
        for (i = num; i <= num2; i++) {
            if (i % 5 === 0) div5.push(i);
        }
    }
    else {
        for (i = num2; i <= num; i++) {
            if (i % 5 === 0) div5.push(i);
        }
    }
    console.log(div5);
}

getMultipleOf5(2, 4);


// Task 20 
/*
Write a function named as fizzBuzz() which takes 2 number arguments and returns a string composed with below requirements when invoked.
•You need to find all the numbers within the range of given 2 numbers (both inclusive) and store them in a string from smallest to greatest number with a ' | ' separator for each number.
•You will need to convert numbers divisible by 3 to 'Fizz'
•You will need to convert numbers divisible by 5 to 'Buzz'
•You will need to convert numbers divisible by both 3 and 5 to 'FizzBuzz’
•The rest will stay the same.
NOTE: Make your code dynamic that works for any numbers.
Assume you will not be given negative numbers.
Examples:fizzBuzz(13, 18) -> "13 | 14 | FizzBuzz | 16 | 17 | Fizz" fizzBuzz(12, 5) -> "Buzz | Fizz | 7 | 8 | Fizz | Buzz | 11 | Fizz"fizzBuzz(5, 5) -> "Buzz"fizzBuzz(9, 6) -> "Fizz | 7 | 8 | Fizz"
*/


function fizzBuzz(num, num2) {
    let string = '| ';
    for (i = Math.min(num, num2); i <= Math.max(num, num2); i++) {
        
    }
}

fizzBuzz(13, 18);
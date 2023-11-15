console.log('\n-----------Task 1 -------------\n');

// Task 1
/*
Write a function named countPos() which takes an 
array of numbers as an argument and returns how 
many elements are positive  when invoked. 
Examples:
countPos([-45, 0, 0, 34, 5, 67])  -> 3
countPos([-23, -4, 0, 2, 5, 90, 123])  -> 4
countPos([0, -1, -2, -3])  -> 0
*/ 

function countPos(array) {
    let countP = 0;
    
    for(const pos of array){
        if(pos > 0) countP++;
    }
    return countP;
};

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 2, 5, 90, 123]));

console.log('\n-----------Task 2 -------------\n');

// Task 2 
/*
Write a function named countA() which takes a string 
argument and returns how many A or a there are in the 
given string when invoked.
NOTE: Ignore case sensitivity. 
Examples:
countA("TechGlobal is a QA bootcamp")  -> 4
countA("QA stands for Quality Assurance")  -> 5
countA("Cypress")  -> 0
*/

function countA(str) {
    let count_A = 0; 
    for(const a of str.split('')){
        if(a.toLowerCase().includes('a')) count_A++;
    }
    return count_A
};

console.log(countA("TechGlobal is a QA bootcamp"));
console.log(countA("QA stands for Quality Assurance"));

console.log('\n-----------Task 3 -------------\n');

// Task 3 
/*
Write a function named as countVowels() which takes a 
string word as an argument and returns the count of the vowel 
letters when invoked.
NOTE: Vowel letters are A,E, O, U, I, a, e, o, u, i
Examples:
countVowels("Hello")  -> 2
countVowels("Hello World")  -> 3
countVowels("JavaScript is fun")  -> 5
countVowels("")                  -> 0
*/

function countVowels(str) {
    let countV = 0;
    for(const vowel of str.split('')) {
        if(vowel.toLowerCase().includes('e') ||
        vowel.toLowerCase().includes('a') ||
        vowel.toLowerCase().includes('i') ||
        vowel.toLowerCase().includes('o') ||
        vowel.toLowerCase().includes('u')) {
            countV++;
        }
    }
    return countV;
};

console.log(countVowels("Hello"));
console.log(countVowels("JavaScript is fun"));

console.log('\n-----------Task 4 -------------\n');

// Task 4 
/*
Write a function named as countConsonants() which takes a 
string word as an argument and returns the count of the 
consonant letters when invoked.
NOTE: A letter that is not vowel is considered as a consonant 
letter.
Examples:
countConsonants("Hello")  -> 3
countConsonants("Hello World")  -> 8
countConsonants("JavaScript is fun")  -> 12
countConsonants("")  -> 0
*/

function countConsonants(str) {
    let countC = 0;
    for(const consto of str.split('')) {
        if(consto.toLowerCase().includes('e') ||
        consto.toLowerCase().includes('a') ||
        consto.toLowerCase().includes('i') ||
        consto.toLowerCase().includes('o') ||
        consto.toLowerCase().includes('u')) {
            
        }
        else countC++;
    }
    return countC;
};

console.log(countConsonants("Hello"));
console.log(countConsonants("Hello World"));

console.log('\n-----------Task 5 -------------\n');

// Task 5 
/*
Write a function named countWords() which takes a 
string argument and returns the total count of words in 
the given string when invoked.
NOTE: Be careful about the extra whitespaces before 
and after the string.
Examples:
countWords("     Javascript is fun       ")  -> 3
countWords("Cypress is an UI automation tool.    ") -> 6 
countWords("1 2 3 4") -> 4
*/

function countWords(str) {
    return str.trimStart().trimEnd().split(' ').length;   
};

console.log(countWords("     Javascript is fun       "));
console.log(countWords("Cypress is an UI automation tool.    "));
console.log(countWords("1 2 3 4"));

console.log('\n-----------Task 6 -------------\n');

// Task 6 
/*
Write a function named as factorial() which takes a 
number as an argument and returns the factorial of the 
number when invoked.
NOTE: Mathematically, the factorial of a non-negative 
integer n is defined as:
n! = n × (n-1) × (n-2) × ... × 2 × 1
Assume you will not be given a negative number.
Examples:
factorial(5)  -> 120
factorial(4) -> 24
factorial(0) -> 1
factorial(1) -> 1
*/

function factorial(num) {
    let factorialNum = 1;
    for(i = num; i >= 1; i--) {
        factorialNum *= i;
    }
    return factorialNum;
}

console.log(factorial(5));
console.log(factorial(4));


console.log('\n-----------Task 10 -------------\n');

// Task 7 
/*
Write a function named as isPalindrome() which takes a 
string word as an argument and returns true if the word is 
palindrome or returns false otherwise when invoked.
NOTE: Palindrome: It is a word that is read the same backward 
as forward
Examples: kayak, civic, madam
NOTE: your function should ignore case sensitivity
Examples:
isPalindrome("Hello")  -> false
isPalindrome("Kayak")  -> true 
isPalindrome("civic")  -> true
isPalindrome("abba")  -> true
isPalindrome("ab  a")  -> false
isPalindrome("123454321")  -> true
isPalindrome("A")  -> true
isPalindrome("")  -> true
*/


function isPalindrome(str) {
    console.log(str.toLowerCase() === str.toLowerCase().split('').reverse().join(''));
}

console.log(isPalindrome("Hello"));
console.log(isPalindrome("Kayak"));


console.log('\n-----------Task 8 -------------\n');

// Task 8 
/*
Write a function named as countMultipleWords() which takes 
an array as an argument and returns the count of the elements 
that has multiple words when invoked.
NOTE: Be careful about the extra whitespaces before and after 
the array element.
Examples:
countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]) 
-> 1
countMultipleWords([ "foo", "bar", "foobar", "     foobar   " ]) 
-> 0
countMultipleWords([ "f o o", "b a r", "foo bar", "     foo bar   " ]) 
-> 4
countMultipleWords([ ])
*/

function countMultipleWords(arr) {
    console.log(arr.reduce((counter, curr) => {
        if(curr.trimStart().trimEnd().includes(' ')) counter + 1,
    0}));
}

console.log(countMultipleWords([ "foo", "", "    ", "foo bar", "     foo" ]));

console.log('\n-----------Task 9 -------------\n');

// Task 9 
/*
Write a function named as count3OrLess() which takes a 
string word as an argument and returns the count of the words 
that has 3 characters or less when invoked.
Examples:
count3OrLess("Hello")  -> 0
count3OrLess("Hi John")  -> 1
count3OrLess("JavaScript is fun")  -> 2
count3OrLess("My name is John Doe")  -> 3
count3OrLess("") 
*/

function count30rLess(str) {
    const count = str.split(' ').reduce((counter, curr) => curr.length <= 3 ? counter + 1 : counter, 0);
    return (count);
}

console.log(count30rLess("Hi John"));
console.log(count30rLess("My name is John Doe"));

console.log('\n-----------Task 10 -------------\n');

// Task 10
/*
Write a function named as isPrime() which takes a 
number as an argument and returns true if the number 
is prime or returns false otherwise when invoked.
NOTE: Mathematically, Prime number is a number that 
can be divided only by itself and 1. It cannot be divided 
by any other number. The smallest prime number is 2 
and 2 is the only even prime number.
Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31...
NOTE: The smallest prime number is 2 and there is no 
negative prime numbers.
Examples:
isPrime(5)  -> true
isPrime(2)  -> true
isPrime(29)  -> true
isPrime(-5) -> false
isPrime(0) -> false
isPrime(1) -> false
*/

function isPrime(num) {

}

console.log('\n-----------Task 11 -------------\n');

// Task 11 
/*
Write a function named add() which takes two array of 
numbers as argument and returns a new array with sum of 
given arrays elements.
NOTE: Be careful about the array sizes as they could be 
different.
Examples:
add([3, 0, 0, 7, 5, 10], [6, 3, 2] )  -> [9, 3, 2, 7, 
5, 10]
add([10, 3, 6, 3, 2], [6, 8, 3, 0, 0, 7, 5, 10, 34])  -> [16, 11, 9,  
3, 2, 7, 5, 10, 34] 
add([-5, 6, -3, 11], [5, -6, 3, -11])  -> [0, 0, 0, 0]
*/

function add(arr1, arr2) {
    const sum = [];
    for(const arr of arr1) {
        for(const ar of arr2) {
            sum.push(arr + ar);
        }
    }
    return sum;
}

console.log(add([3, 0, 0, 7, 5, 10], [6, 3, 2] ));

console.log('\n-----------Task 12 -------------\n');

// Task 12
/*
Write a function named as removeExtraSpaces() which takes 
a string word as an argument and returns the string back with 
all extra spaces removed when invoked.
Examples:
removeExtraSpaces("Hello")  -> "Hello" 
removeExtraSpaces("      Hello    World     ")  -> "Hello 
World" 
removeExtraSpaces("     JavaScript is          fun")  -> 
"JavaScript is fun”
removeExtraSpaces("")  -> "" 
*/ 

function removeExtraSpaces(str) {
    const arr = str.split(' ').filter(x => x !== '');
    return arr.join(' ');
}


console.log(removeExtraSpaces("      Hello    World     "));
console.log(removeExtraSpaces("     JavaScript is          fun"));


console.log('\n-----------Task 13 -------------\n');

// Task 13
/*
Write a function named findClosestTo10() which takes an 
array of numbers as argument and returns the closest element 
to 10 from the given array.
NOTE: Assume that length of array is always more than zero.
NOTE: Ignore the 10 itself.
NOTE: If there are more than one numbers are close equally, 
return the smaller number.
Examples:
findClosestTo10([10, -13, 5, 70, 15, 57] )  -> 5
findClosestTo10([10, -13, 8, 12, 15, -20])  -> 8
findClosestTo10([0, -1, -2])  -> 0
*/

function findClosestTo10(arr) {
    let num = 10;
    for(const a of arr) {
        if(a !== 10) {
            num = a;
            if(num >= a && a < 10) num = a;
            else if(num <= a && a > 10) num = a;
        } 
    }
    return num;
}

console.log(findClosestTo10([10, -13, 5, 70, 15, 57] ));
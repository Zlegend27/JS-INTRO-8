console.log('\n-----------Task 1 -------------\n');

// Task 1 
/*
Write a function named noSpace() which takes a string as argument and 
returns a new string with all the spaces removed.
Examples:
noSpace("")  ->  ""
noSpace("Javascript")  ->  "Javascript"
noSpace("    Hello   ")  -> "Hello"
noSpace(" Hello World   ")  -> "HelloWorld”
noSpace("Tech Global")  -> "TechGlobal"
*/

function noSpace(str) {
    console.log(str.split(' ').join(''));
}

noSpace("Tech Global");
noSpace("    Hello   ");
noSpace(" Hello World   ");


console.log('\n-----------Task 2 -------------\n');

// Task 2 
/*
Write a function named replaceFirstLast() which takes a string argument and 
returns a new string with the first and last characters replaced.
NOTE: If the length is less than 2, return an empty string.
NOTE: Ignore extra spaces before and after the string.
Examples:
replaceFirstLast("")  ->  ""
replaceFirstLast("Hello")  ->  "oellH"
replaceFirstLast("Tech Global")  -> "lech GlobaT"
replaceFirstLast("A")  -> ""
replaceFirstLast("    A      ")  -> ""
*/

function replaceFirstLast(str) {
    let a = str.trim();

    if (a.length <= 2) console.log('');
    else {
        let ab = a.replace(a[a.length - 1], a[0]);
        let abc = ab.replace(a[0], a[a.length - 1]);
        console.log(abc);
    }

}

replaceFirstLast("Hello");
replaceFirstLast("");
replaceFirstLast("Tech Global");


console.log('\n-----------Task 3 -------------\n');

// Task 3
/*
Write a function named hasVowel() which takes a string argument and returns 
true if the string has a vowel, returns false if the string doesn’t contain any 
vowel letter.
NOTE: Vowels are = a, e, o, u, i.
NOTE: Ignore upper/lower cases.
Examples:
hasVowel("")  -> false
hasVowel("Javascript")  -> true
hasVowel("Tech Global")  -> true
hasVowel("1234")  -> false
hasVowel("ABC")  -> true
*/

function hasVowel(str) {
    for (const vowel of str) {
        if (vowel.toLowerCase() === 'a' ||
            vowel.toLowerCase() === 'e' ||
            vowel.toLowerCase() === 'o' ||
            vowel.toLowerCase() === 'u' ||
            vowel.toLowerCase() === 'i'
        ) {
            return true;
        }

        else return false;
        
    }
}

hasVowel("");
console.log(hasVowel("Tech Global"));

console.log('\n-----------Task 4 -------------\n');

// Task 4 
/*
Write a function named checkAge() which takes a number argument to be 
considered as the yearOfBirth and returns a message below based on the given 
year.
If the age is less than 16, then print "AGE IS NOT ALLOWED”"
If the age is 16 or more, then print "AGE IS ALLOWED"
If the age is more than 120 or a future year, print "AGE IS NOT VALID"
NOTE: Consider someone born in 2013 is 10 years old as of 2023.
Examples:
checkAge(2015) -> "AGE IS NOT ALLOWED"
checkAge(2007) -> "AGE IS ALLOWED"
checkAge(2050) -> "AGE IS NOT VALID"
checkAge(1920) -> "AGE IS ALLOWED"
checkAge(1800) -> "AGE IS NOT VALID"
*/
 
function checkAge(num) {
    let age = 2023 - num;

    if(age < 16) console.log('Age is not allowed');
    else if(age < 120) console.log('Age is allowed');
    else console.log('Age is not Valid');
}

checkAge(2015);
checkAge(2050);
checkAge(2007);


console.log('\n-----------Task 5 -------------\n');

// Task 5 
/*
Write a function named averageOfEdges() which takes three number 
arguments and will return average of min and max numbers .
Examples:
averageOfEdges(0, 0, 0)  -> 0
averageOfEdges(0, 0, 6)  -> 3
averageOfEdges(-2, -2, 10)  -> 4
averageOfEdges(-3, 15, -3)  -> 6
averageOfEdges(10, 13, 20)  -> 15
*/

function averageOfEdges(num1, num2, num3){
    let min = Math.min(num1, num2, num3);
    let max = Math.max(num1, num2, num3);

    console.log((max + min) / 2);
}

averageOfEdges(0, 0, 0);
averageOfEdges(10, 13, 20);
averageOfEdges(-3, 15, -3);


console.log('\n-----------Task 6 -------------\n');

// Task 6 
/*
Write a function named noA() which takes an array of strings as argument and 
will return a new array with all elements starting with "A" or "a" replaced with 
"###".
Examples:
noA(["javascript", "hello", "123", "xyz"])  ->  ["javascript", "hello", "123", "xyz"]
noA(["apple", "123", "ABC", "javascript"])  ->  ["###", "123", "###", 
"javascript"]
noA(["apple", "abc", "ABC", "Alex", "A"])  -> ["###", "###", "###", "###", 
"###"]
*/

function noA(array) {
    const arr = [];
    for(const a of array) {
        if(a.toLowerCase().includes('a')) arr.push('###');
        else arr.push(a);
    }
    console.log(arr);
}

noA(["javascript", "hello", "123", "xyz"]);
noA(["apple", "123", "ABC", "javascript"]);



console.log('\n-----------Task 7 -------------\n');

// Task 7 
/*
Write a function named no3and5() which takes an array of integer numbers as 
argument and will return a new array with elements replaced by conditions 
below.
If element can be divided by 5, replace it with 99 
If element can be divided by 3, replace it with 100 
If element can be divided by both 3 and 5, replace it with 101
Examples:
no3and5([7, 4, 11, 23, 17])  -> [7, 4, 11, 23, 17]
no3and5([3, 4, 5, 6])  -> [100, 4, 99, 100]
no3and5([10, 11, 12, 13, 14, 15])  -> [99, 11, 100, 13, 14, 101]
*/

function no3and5(arr) {
    const ar = [];
    for(const a of arr) {
        if(a % 3 === 0 && a % 5 === 0) ar.push(101);
        else if(a % 3 === 0) ar.push(100);
        else if(a % 5 === 0) ar.push(99);
        else ar.push(a);
    }
    console.log(ar);
}

no3and5([7, 4, 11, 23, 17]);
no3and5([3, 4, 5, 6]);
no3and5([10, 11, 12, 13, 14, 15]);


console.log('\n-----------Task 8 -------------\n');

// Task 8 
/*
Write a function named countPrimes() which takes an array of integer 
numbers as argument and will return the number of the prime numbers in the 
given array.
NOTE: Prime number is a number that can be divided only by 1 and itself .
NOTE: Negative numbers cannot be prime .
Examples: 2,3,5,7,11,13,17,19,23,29,31,37 etc. 
NOTE: Smallest prime number is 2.
Examples:
countPrimes([-10, -3, 0, 1])  -> 0
countPrimes([7, 4, 11, 23, 17])  -> 4
countPrimes([41, 53, 19, 47, 67])  -> 5
*/

function countPrimes(array) {

}


console.log('\n-----------Task 9 -------------\n');

// Task 9 
/*
Write a function named removeDuplicates() which takes an array argument 
and returns a new array with all the duplicates removed.
Examples:
removeDuplicates([10, 20, 35, 20, 35, 60, 70, 60])  -> [10, 20, 35, 60, 
70]
removeDuplicates([1, 2, 5, 2, 3])  -> [1, 2, 5, 3]
removeDuplicates([0, -1, -2, -2, -1])  -> [0, -1, -2]
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"])  -> ["abc", "xyz", 
"123", "ab", "ABC"]
removeDuplicates(["1", "2", "3", "2", "3"])  -> ["1", "2", "3"]
*/

function removeDuplicates(array) {
    const a = [];
    for( const arr of array) {
        if(arr !== a) a.push(arr);
    }
    console.log(a);
}

removeDuplicates([1, 2, 5, 2, 3]);
removeDuplicates([0, -1, -2, -2, -1]);
removeDuplicates(["abc", "xyz", "123", "ab", "abc", "ABC"]);
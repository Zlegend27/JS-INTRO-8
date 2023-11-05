// Count how many vowel letters you have in the string - 3
const school = 'TechGlobal';  
let count = 0;

for(let i = 0; i <= school.length-1; i++) {
    if('AEOUIaeoui'.includes(school[i])) count++;

} 
console.log(count); 

// if(current === 'a' || current === 'e' || current === 'o' || current === 'u' || current === 'i') count++;




/*
Assume you are given a string and asked to reverse it

Adam    -> madA
Hello   -> olleH

The reversed 'Adam' is 'madA'.
*/

let word = 'Hello';

// for loop version solved
let reversedWord = '';

for(let i = word.length-1; i >= 0; i--) {
    reversedWord += word[i];
}
console.log(reversedWord);
 
// for...of version solved
reversedWord = '';

// reverse() version
reversedWord = word.split('').reverse().join('');

console.log(reversedWord); 
 
/*
*** ONE OF THE MOST ASKED INTERVIEW QUESTION!!!
Assume you are given a string and asked to find if it is palindrome
Palindrome means a word or sentence reads the same forward and backward.
This program should be case-insensitive

civic   -> The 'civic' is PALINDROME!
madam   -> The 'madam' is PALINDROME!
Abba    -> The 'Abba' is PALINDROME!
12321   -> The '12321' is PALINDROME!

abc     -> The 'abc' is NOT PALINDROME!
*/


let str = 'Abba';
reversedStr = str.split('').reverse().join('');

if(str.toLowerCase() === reversedStr.toLowerCase()) console.log(`The ${str} is a Palindrome!`);
else console.log(`The ${str} is not a Palindrome!`);


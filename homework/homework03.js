/* 
 TASK 1  

  Requirement:
Write a  program that generates 3 random numbers 
between 1 to 100 (1 and 100 are included)

Print true if the average of the random numbers is 
greater or equals 50. 

Print false if the average of the random numbers is less 
than 50.

Test data 1:
20, 70, 25

Expected Output 1: 
false

Test data 2:
65, 80, 90

Expected Output 2: 
true 
 
*/

// Pseudo Solution: 
// 1. Generate 3 random numbers between 1 and 100 (both inclusive)
// 2. create a conditional statement 
//      find the average of the 3 random numbers generated 
//      if average is greater than or 50 print true  
//      if average is less than 50 print false 


let num1 = Math.floor(Math.random() * (100 - 1 + 1)) + 1, num2 = Math.floor(Math.random() * (100 - 1 + 1)) + 1, num3 = Math.floor(Math.random() * (100 - 1 + 1)) + 1;


if ((num1 + num2 + num3) / 3 >= 50) console.log(true);
else console.log(false);



//*************************************************************************************************************************************************
/* 
 
TASK 2  
 
Requirement:
Write a  program that generates 3 random numbers 
between 1 to 3 (1 and 3 are included)

-If all numbers are different, then print “NO MATCH”

-If any of those 2 numbers are equal, then print 
“DOUBLE MATCH”

-If all 3 numbers are equal, then print “TRIPLE MATCH”

Test data 1:
3, 3, 3 

Expected Output 1: 
TRIPLE MATCH 

Test data 2:
1, 3, 3 

Expected Output 2: 
DOUBLE MATCH 

Test data 3:
1, 2, 3 

Expected Output 3: 
NO MATCH 

Test data 4:
1, 1, 2 

Expected Output 4: 
DOUBLE MATCH 
 
*/

// Pseudo Solution: 
// 1. Generate 3 random numbers between 1 and 3 (inclusive)
// 2. create a conditional statement
//      if all the variables are equal print its tripple match 
//      if all the variables are different print no match 
//      if any of the variables have a match print double match


let num4 = Math.floor(Math.random() * 3) + 1, num5 = Math.floor(Math.random() * 3) + 1, num6 = Math.floor(Math.random() * 3) + 1;

if (num4 === num5 && num4 === num6) console.log('TRIPPLE MATCH');
else if (num4 === num5 || num4 === num6 || num5 === num6) console.log('DOUBLE MATCH');
else console.log('NO MATCH');



//*************************************************************************************************************************************************
/*  

 TASK 3   
  
  
Requirement:
Write a function named as hasA() which takes a string 
word as an argument and returns true if given string 
has a character "a" or "A", and false otherwise when 
invoked. 

NOTE: Assume you will not be given an empty word. 

Examples:
hasA("Tech")  -> false
hasA("Global")  -> true
hasA("")  -> false
hasA("Apple")  -> true
 
*/

// Pseudo Solution 
// 1. create a function hasA() 
// 2. create a conditional statement 
// 3.   search if string has a or A print true
// 4.   else string is false 


function hasA(str) {

  if (str.toLowerCase().includes('a')) {
    console.log(true);
  }
  else {
    console.log(false);
  }
}

hasA("Teach")
hasA("Global")
hasA("")
hasA("Apple")



//*************************************************************************************************************************************************
/*  
 
TASK 4 
 
 
Requirement:
Write a function named as doubleOrTripleWord() 
which takes a string word as an argument and returns 
the given word back tripled if the string length is even 
or doubled if the string length is odd when invoked. 

Examples:
doubleOrTripleWord("Tech")  -> "TechTechTech"
doubleOrTripleWord("Apple")  -> "AppleApple”
doubleOrTripleWord("")  -> ""
doubleOrTripleWord(" ")  -> " "
doubleOrTripleWord("1")  -> "11"
doubleOrTripleWord("22")  -> "222222"  
 
*/

// Pseudo Solution:  
//  1. create a function with string argument 
//  2. create a conditional statement  
//  3. find the length of the string and % by 2
//        if the remainder is zero than tripple the string
//        else double the string

function doubleOrTripleWord(str1) {
  if (str1.length % 2 === 0) console.log(str1.repeat(3));
  else console.log(str1 + str1);
}

doubleOrTripleWord("Tech");
doubleOrTripleWord("Apple");
doubleOrTripleWord("");
doubleOrTripleWord(" ");
doubleOrTripleWord("1");
doubleOrTripleWord("22");



//*************************************************************************************************************************************************
/*  
 
TASK 5 
 
 
Requirement:
Write a function named as firstWord() which takes a 
string word as an argument and returns the first word 
from the given string when invoked. 

NOTE: Return empty string if the given string does not  
have any word. 

Examples:
firstWord("Hello World")  -> "Hello"
firstWord("I like JavaScript")  -> "I"
firstWord("Hello")  -> "Hello"
firstWord("")  -> ""
firstWord("    ")  -> "" 
 
*/

// Pseudo Solution: 
//  1. create a function with string argument  
//  2. split the string after the first empty space 

function firstWord(str2) {
  console.log(str2.split(' ').slice(0, 1) + '');
}


firstWord("Hello World");
firstWord("I like JavaScript");
firstWord("Hello");
firstWord("");
firstWord("    ");



/*  
 
TASK 6 
 
 
Requirement:
Write a function named as lastWord() which takes a 
string word as an argument and returns the last word 
from the given string when invoked. 

NOTE: Return empty string if the given string does not 
have any word. 

Examples:
lastWord("Hello World")  -> "World"
lastWord("I like JavaScript")  -> "JavaScript”
lastWord("Hello")  -> "Hello"
lastWord("")  -> ""
lastWord("    ")  -> "" 
 
*/

function lastWord(str3) {
  console.log(str3.split(' ').slice(-1) + '');
}

lastWord("Hello World");
lastWord("I like JavaScript");
lastWord("Hello");
lastWord("");
lastWord("    ");

/* 

Task 7 
 
 
Requirement: 
Write a function named as firstlastWord() which takes 
a string word as an argument and returns the first and 
last words from the given string when invoked. 

NOTE: Return empty string if the given string does not 
have any word. 

Examples:
firstLastWord("Hello World")  -> "HelloWorld"
firstLastWord("I like JavaScript")  -> "IJavaScript”
firstLastWord("Hello")  -> "HelloHello"
firstLastWord("")  -> ""
firstLastWord("    ")  -> "" 
 
*/

function firstLastWord(str4) {
  console.log(str4.split(' ').slice(0, 1) + str4.split(' ').slice(-1));
}

firstLastWord("Hello World");
firstLastWord("I like JavaScript");
firstLastWord("Hello");
firstLastWord("");
firstLastWord("    ");

/* 
 
TASK 8  
 
 
Requirement:
Write a function named as startVowel() which takes a 
string word as an argument and returns true if given 
string starts with a vowel, and false otherwise when 
invoked. 

NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U  

Examples:
startVowel("Hello")  -> false
startVowel("Apple") -> true
startVowel("orange")  -> true
startVowel("")  -> false
startVowel("    ")  -> false
startVowel("123")  -> false  
 
*/

function startVowel(str5) {
  if (str5[0] === 'a' || str5[0] === 'e' || str5[0] === 'i' || str5[0] === 'o' || str5[0] === 'u' || str5[0] === 'A' || str5[0] === 'E' || str5[0] === 'I' || str5[0] === 'O' || str5[0] === 'U' ) console.log(true);
  else console.log(false);
  }
 
  startVowel("Hello");
  startVowel("Apple");
  startVowel("orange");
  startVowel("");
  startVowel("    ");
  startVowel("123");




/*  
 
TASK 9 
 
 
Requirement: 
Write a function named as swap4() which takes a 
string word as an argument and returns the string back 
with its first and last 4 characters swapped when 
invoked. 

NOTE: Return empty string if the given string does not 
have 8 or more characters. 

Examples:
swap4("abc")  -> ""
swap4("JavaScript")  -> "riptScJava"
swap4("TechGlobal")  -> "obalGlTech"
swap4("")  -> ""
swap4("    ")  -> ""
swap4("Apple")  -> "" 
 
*/

function swap4(str6) { 
  let first = str6.split('').slice(0,4);
  let last = str6.split('').slice(-4);
  console.log(str6.replace(last, first));
} 
 
swap4("JavaScript");
/*  
 
TASK 10 
 
 
Requirement: 
Write a function named as swapFirstLastWord() 
which takes a string word as an argument and returns 
the string back with its first and last words swapped 
when invoked. 

NOTE: Return empty string if the given string does not 
have 2 or more words. 

Examples:
swapFirstLastWord("Hello World")  -> "World 
Hello"
swapFirstLastWord("I like JavaScript") -> "JavaScript like 
I"
swapFirstLastWord("foo bar foo bar")  -> "bar bar foo 
foo"
swapFirstLastWord("")  -> ""
swapFirstLastWord("    ")  -> ""
swapFirstLastWord("Hello")  -> ""
swapFirstLastWord("Hello   ")  -> "" 
 
*/ 
 
function swapFirstLastWord(str7) {
  let s = str7.split(' '); 
  console.log()
} 
 
 
swapFirstLastWord("Hello World");
swapFirstLastWord("I like JavaScript");
swapFirstLastWord("foo bar foo bar");
swapFirstLastWord("");
swapFirstLastWord("    ");
swapFirstLastWord("Hello");
swapFirstLastWord("Hello   "); 
 
// THE LAST two are giving me trouble and I want to refer to the answers
/* 
  
Question 1

Requirement:
Assume you are given a number between 1 and 100 (both 1 and 100 are included)
Find which quarter and half is number in
1st quarter is 1-25
2nd quarter is 26-50
3rd quarter is 51-75
4th quarter is 76-100
1st half is 1-50
2nd half is 51-100

----
Test data 1:
34

Expected result 1:
34 is in the 1st half
34 is in the 2nd quarter

----
Test data 2:
76

Expected result 2:
76 is in the 2nd half
76 is in the 4th quarter 
 
*/

/* 
 
Pseudo Solution: 
 
1. create a condition statement  
    if number is in first half 
        if number is first quarter 
        else 2nd quarter 
    else number is in 2nd half 
        if number is 3rd quarter 
        else number is 4th quarter
 
*/

let num1 = 34;
let num2 = 76;

if (num1 < 51) {
    if (num1 < 26) {
        console.log(`${num1} is in the 1st half
         ${num1} is in the 1st quarter`);
    }
    else {
        console.log(`${num1} is in the 1st half
${num1} is in the 2nd quarter`);
    }
}
else {
    if (num1 < 76) {
        console.log(`${num1} is in the 2nd half. 
${num1} is in the 3rd quarter.`);
    }
    else {
        console.log(`${num1} is in the 2nd half. 
${num1} is in the 4th quarter.`);
    }
}





/*  
Question 2

Requirement:
Assume you are given 2 numbers to be 0 or 1.

Print true if they are same number.
Otherwise, print false

----
Test data 1:
0, 1

Expected result 1:
false

----
Test data 2:
0, 0

Expected result 2:
true

----
Test data 3:
1, 0

Expected result 3:
false

----
Test data 4:
1, 1

Expected result 4:
true 
*/


/*Pseudo Code:
1. Get 0 or 1 as our numbers
2. Check if they are same numers via match or no match to get true or false
*/

let num3 = 0
let num4 = 1

console.log(num3 === num4); //simple way



if (num3 === num4) {
    console.log(true);
}
else {
    console.log(false);
} //if-else 

/* 
 
Question 3

Requirement:
Assume you are given 3 numbers between 1 and 100 (both 1 and 100 are included).

Print true if they are all even numbers.
Otherwise, print false

----
Test data 1:
2, 4, 6

Expected result 1:
true

----
Test data 2:
68, 44, 2

Expected result 2:
true

----
Test data 3:
10, 20, 25

Expected result 3:
false

----
Test data 4:
51, 67, 99

Expected result 4:
false 
 
*/

/*
Psuedo Code:
1. Get 3 numbers between 1 and 100 (given numbers)
2. Check if numbers even or odd via (%2===) and get true or false 
3. True if even, False if odd 
 
*/

/*
Requirement:
Assume you are given a single character.
Find if the given character is a letter or digit.

Test data 1:
"v"

Expected result 1:
"v"  is a letter

Test data 2:
"5"

Expected result 2:
"5"  is a digit 
 
*/



/* 
 
Question 5
Requirement:
Assume you are given a single character.
Find if the given character is a lowercase or an uppercase letter.
NOTE: if the character is not a letter, print "INVALID INPUT"

Test data 1:
"a"

Expected result 1:
"a"  is a lowercase letter


Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is an uppercase letter


Test data 4:
" "

Expected result 4:
"INVALID INPUT" 
 
*/

/*  
Pseudo Solution: 
  
1. 
*/

let s1 = ' ', s2 = 5, s3 = 'N'.s4 = ' ';

if (s1.charCodeAt() >= 65 && s1.charCodeAt() <= 90) {
    console.log(`${s1} is an Upper Case letter`)
}
else if (s1.charCodeAt() >= 97 && s1.charCodeAt() <= 122) {
    console.log(`${s1} is an Lower Case letter`)
}
else {
    console.log('INVALID INPUT');
}

/*
Question 6

Requirement:
Assume you are given a single character.
Find if the given character is a special character or not.

Test data 1:
"a"

Expected result 1:
"a"  is not a special character


Test data 2:
"5"

Expected result 2:
"5" is not a special character


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is not a special character
*/

let s6 = '$';

if (s6.charCodeAt() >= 33 && s6.charCodeAt() <= 47) console.log('is a special character');
else if (s6.charCodeAt() >= 58 && s6.charCodeAt() <= 64) console.log('is a special charecter');
else if (s6.charCodeAt() >= 91 && s6.charCodeAt() <= 96) console.log('is a special charecter');
else if (s6.charCodeAt() >= 123 && s6.charCodeAt() <= 126) console.log('is a special charecter');
else console.log('is not a special charecter');

// solution 2 

if (s6.charCodeAt() >= 33 && s6.charCodeAt() <= 47 || s6.charCodeAt() >= 58 && s6.charCodeAt() <= 64 || s6.charCodeAt() >= 91 && s6.charCodeAt() <= 96 || s6.charCodeAt() >= 123 && s6.charCodeAt() <= 126) console.log('is a special charecter');
else console.log('is not a special charecter');

/* 
 
Question 7

Requirement:
Assume you are given a single character.
Find if the given character is a vowel or not.

NOTE: if the character is not a letter, print "INVALID INPUT"
NOTE: Vowel letters: a, e, i o, u, A, E, I, O, U 

Test data 1:
"a"

Expected result 1:
"a"  is a vowel

Test data 2:
"5"

Expected result 2:
"INVALID INPUT"


Test data 2:
"N"

Expected result 1:
"N"  is not a vowel

Test data 4:
" "

Expected result 4:
"INVALID INPUT" 
 
*/

let data = 'A'; 
let text = data.toLowerCase();

if (!Number(text) || !' ') {
    if (text.includes('a') ||
        text.includes('e') ||
        text.includes('i') ||
        text.includes('o') ||
        text.includes('u'))
      {
        console.log(`${data} is a vowel`);
    }
    else console.log(`${data} is not a vowel`);
}
else {
    console.log('INVALID INPUT');
}

/*  
Question 8

Requirement:
Assume you are given a single character.
Find if the given character is a letter, digit, whitespace or special.

Test data 1:
"a"

Expected result 1:
"a"  is a letter


Test data 2:
"5"

Expected result 2:
"5"  is a digit


Test data 3:
"$"

Expected result 3:
"$"  is a special character


Test data 4:
" "

Expected result 4:
" " is a whitespace
 
*/
 
let s8 = "$";
if (
  (s8.charCodeAt() >= 33 && s8.charCodeAt() <= 47) ||
  (s8.charCodeAt() >= 58 && s8.charCodeAt() <= 84) ||
  (s8.charCodeAt() >= 91 && s8.charCodeAt() <= 98) ||
  (s8.charCodeAt() >= 123 && s8.charCodeAt() <= 128)
)
  console.log(`${s8} it is a special character`);
else if (Number(s8)) console.log(`${s8} it is a digit`);
else if (s8 === " ") console.log(`${s8} it is a whitespace`);
else console.log(`${s8} it is a letter`); 
 
 
/* 
 
Question 9

Requirements:

Write a function that finds the largest of five numbers.

Note: Using simple if-elseif-else conditions

Test data 1:
-5, -2, -6, 0, -1

Expected result 1:
0


Test data 2:
10, 102, 0, -8, -100

Expected result 2:
102 
 
*/ 

 function findMax(n1, n2, n3, n4, n5) {   
   let result = Math.max(n1, n2, n3, n4, n5); 
   console.log(result);
}   
findMax(1, 102, 0, -8, -100); 

 // if else solution 
function findMax(n1, n2, n3, n4, n5) { 

    if(n1 > n2 && n1 > n3 && n1 > n4 && n1 > n5) console.log(n1);
    else if(n2 > n1 && n2 > n3 && n2 > n4 && n2 > n5) console.log(n2);
    else if(n3 > n1 && n3 > n2 && n3 > n4 && n3 > n5) console.log(n3);
    else if(n4 > n1 && n4 > n2 && n4 > n3 && n4 > n5) console.log(n4);
    else if(n5 > n1 && n5 > n2 && n5 > n3 && n5 > n4) console.log(n4); 
    else console.log('Invalid');
}  
 
findMax(1, 102, 0, -8, -100); 
 
/* 
 
Question 10

Requirements:

Write a function to check from two given integers whether one of them is 8 or their sum or difference is 8.

Note: Using simple if-elseif-else conditions

Test data 1:
7, 8

Expected result 1: 
true

Test data 2:
16, 8

Expected result 2: 
true


Test data 3:
24, 32

Expected result 3: 
true

Test data 4:
17, 18

Expected result 4: 
False  
 
*/ 
 
function isEqualTo8( n1,n2){
    if (n1===8 || n2===8 || n1+n2===8|| Math.abs(n1-n2)===8) return true   
    else return false
}
console.log(isEqualTo8(17,18)); 
 
let num10 = Math.floor(Math.random() * 10) + 1; 
let num20 = Math.floor(Math.random() * 10) + 1; 
 
console.log(num10 + num20); 
 
let n1 = Math.floor(Math.random() * 10) + 1, n2 = Math.floor(Math.random() * 10) + 1; 
 
console.log(Math.max(n1, n2)); 
 
let num12 = Math.floor(Math.random() * 10) + 1; 
let num22 = Math.floor(Math.random() * 10) + 1; 
 
console.log(num12 * num22); 
 
let n3 = Math.floor(Math.random() * 10) + 1; 
let n4 = Math.floor(Math.random() * 10) + 1; 
 
console.log(Math.max(n3, n4));
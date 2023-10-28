/*  

Task 1
Write a program that extracts expected values from a given String using JS String functions.

"I like apples and oranges" 		                 -> "APPLE"
"JavaScript is not a scripting programming language"  	 -> "JavaScript"
"I don't like books" 			                     -> "I like books" 
*/ 
 
let string1 = "I like apples and oranges"; 
let string2 = "JavaScript is not a scripting programming language"; 
let string3 = "I don't like books"; 
 
console.log((string1.slice(7, 12).toUpperCase()));  

console.log(string2.slice(0, 10));  
 
console.log(string3.slice(0, 1) + string3.slice(7));
 
 
// task 2  

/* 
Assume that you are given a String of any length. 
Find:
-The length of the String
-First char in the String
-Last char in the String
-Check if the String contains any vowel letters 	
	-if it has any vowel, then print true
	-Else, print false
	Vowels = a, e, i, u, o, A, E, I, U, O
     
     
    Test Data 1:
let s1 = "JavaScript";

Expected Result 1:
The length is = 10
The first char is = J
The last char is = t
true  
 
Test Data 2:
let s1 = "";

Expected Result 2:
The length is = 0
The first char is = undefined
The last char is = undefined
false 

*/ 
 
// Solution 

// let s1 = "JavaScript"; 
  // my failed attempt  
//function getStringInfo(s1) {   
//  console.log(s1.length); 
//   console.log(s1[0]); 
// console.log(s1[s1.length-1]);   
//  return s1

// } 
 
let s1 = "JavaScript"; 
let s2 = ""; 
 
console.log(`The length ${s1}: ${s1.length}`);
console.log(`The first charecter of  ${s1}: ${s1[0]}`);
console.log(`The last charecter of ${s1}: ${s1.slice(-1)}`);  
 
console.log(`The length ${s2}: ${s2.length}`);
console.log(`The first charecter of  ${s2}: ${s2[0]}`);
console.log(`The last charecter of ${s2}: ${s2.slice(-1)}`); 
 
  
console.log("JavaScript".includes('a') || s1.includes('e') || s1.includes('i') || s1.includes('o') || s1.includes('u'));  
console.log("JavaScript".includes('a') || s2.includes('e') || s2.includes('i') || s2.includes('o') || s2.includes('u')); 
 
/*  
  Task 3 

Assume that you are given a String of any odd length. 
Find the middle character for the given String.  
 
Test Data 1:
let s2 = "x";

Expected Result 1:
"x" 
 
Test Data 2:
let s2 = "abc";

Expected Result 2:
"b" 
 
Test Data 3:
let s2 = "civic";

Expected Result 3:
"v" 
*/  
let s3 = 'x'; 
let s4 = 'abc';
let s5 = 'civic'; 

let middleIndex1 = Math.floor(s3.length / 2);
let middleIndex2 = Math.floor(s4.length / 2);
let middleIndex3 = Math.floor(s5.length / 2);
  
console.log(s3[middleIndex1]);
console.log(s4[middleIndex2]);
console.log(s5[middleIndex3]);
 
  
/* 
  
Task 4 

Assume that you are given a String of any even length including empty. 
Find the middle 2 characters for the given String. 
 
Test Data 1:
let s3 = "";

Expected Result 1:
"" 
 
Test Data 2:
let s3 = "abcd";

Expected Result 2:
"bc" 
 
Test Data 3:
let s3 = "JavaScript";

Expected Result 3:
"Sc"  

*/  
 
let s6 = ""; 
let s7 = "abcd"; 
let s8 = "JavaScript"; 
 
let middleIndex6 = s6.length / 2; 
let middleIndexFirst6 = (s6.length / 2) - 1;
let middleIndex7 = s7.length / 2;  
let middleIndexFirst7 = (s7.length / 2) - 1 ;

// note: this solution only works when string is not empty 
console.log(s7[middleIndexFirst7] + s7[middleIndex7]); 
 
console.log(s7.slice(s7.length / 2 - 1, s7.length / 2 + 1)); 

  
/* Task 5   
 
Requirement:
Write a program that divides the given String. Assume the length of the String will at least 
be 4.
-Find and print the first two characters
-Find and print the last two characters 
-Find and print all the middle characters other than first and last 2 characters 
 
 
Test Data 1:
let s4 = "abcd";

Expected Result 1:
The first 2 characters are = ab
The last 2 characters are = cd
The other characters are =  
 

Test Data 2:
let s4 = "JavaScript";

Expected Result 2:
The first 2 characters are = Ja
The last 2 characters are = pt
The other characters  are = vaScri
 
*/  

let s9 = 'abcd'; 
let s10 = 'JavaScript'; 
 
console.log('The first 2 charecters are = ',s9.slice(0, 2)); 
console.log('The last 2 charecters are = ',s9.slice(-2));
console.log('The other charcters are = ' ,s9.slice(2, s9.length-2)); 
 
console.log('The first 2 charecters are = ',s10.slice(0, 2)); 
console.log('The last 2 charecters are = ',s10.slice(-2));
console.log('The other charcters are = ' ,s10.slice(2, s10.length-2)); 
 
 
/* 
    Task  6 

    Write a program that checks if a given String starts and ends with xx. 
-If given String starts and ends with xx, then print true. 
-Otherwise, print false 
 
Test Data 1:
let s7 = "";

Expected Result 1:
false


Test Data 2:
let s7 = "red";

Expected Result 2:
false



Test Data 3:
let s7 = "green";

Expected Result 3:
false



Test Data 4:
let s7 = "xxbluexx";

Expected Result 4:
true
 
*/ 
 
let s11 = ''; 
let s12 = 'red'; 
let s13 = 'green'; 
let s14 = 'xxbluexx'; 

console.log(s11[0] === 'x' && s11[1] === 'x' && s11[s14.length-1] === 'x' && s14[s11.length-2] === 'x');  
console.log(s12[0] === 'x' && s12[1] === 'x' && s12[s14.length-1] === 'x' && s14[s12.length-2] === 'x'); 
console.log(s13[0] === 'x' && s13[1] === 'x' && s13[s14.length-1] === 'x' && s14[s13.length-2] === 'x'); 
console.log(s14[0] === 'x' && s14[1] === 'x' && s14[s14.length-1] === 'x' && s14[s14.length-2] === 'x'); 
 
 
let str3 = ''; 
let str4 = 'red'; 
let str5 = 'green'; 
let str6 = 'xxbluexx';  
 
function checkIfXX(str) {
  console.log(str.startsWith('xx') && str.endsWith('xx'));
}
 
checkIfXX(str3);
checkIfXX(str4);
checkIfXX(str5);
checkIfXX(str6); 
  

/* 
   Task 7 
    
   Requirement:
Write a program that swaps the first and last word of a given sentence as a String. 

Test Data 1:
let s8 = "";

Expected Result 1:
""


Test Data 2:
let s8 = " ";

Expected Result 2:
" "


Test Data 3:
let s8 = "I like Apple";

Expected Result 3:
"Apple like I"



Test Data 4:
let s8 = "JavaScript is nice to learn";

Expected Result 4:
"learn is nice to JavaScript" 

*/ 
 
let str7 = ''; 
let str8 = ' ';
let str9 = 'I like Apple';
let str10 = 'JavaScript is nice to learn'; 
 
// function swapWord(str) {
//  console.log(str)
// } 
 
let arr = str9.split(' '),
const word = arr[arr.length-1].replace(arr[0]); 
 
let swap1 = ''; 
let swap2 = ' '; 
let swap3 = 'I like Apple'; 
let swap4 = 'JavaScript is nice to learn'; 
 
function swapWords(sent) { 
  const first = sent.slice(0, sent.indexOf(' '));
  const last = sent.slice(sent.lastIndexOf(' ') + 1); 
  const middle = sent.slice(sent.indexOf(' '), sent.lastIndexOf(' ') + 1); 
   
  console.log(last + middle + first);  
   
  const fIdx = sent.indexOf(' ');
  const lIdx = sent.lastIndexOf(' '); 
   
  console.log('Using indexes: ', sent.slice(lIdx + 1) + sent.slice(fIdx, lIdx + 1) + sent.slice(0, fIdx));
} 
 
swapWords(swap3); 
swapWords(swap4); 
 
 

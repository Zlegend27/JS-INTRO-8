/* 
  Area of a square 
Write a function named as squareArea() which calculates the area of a square when invoked. 
NOTE: Assume the side of the square is x. 
Conversion Formula:Area = x * x 
 
Examples: 
squareArea(5)   -> 25 
squareArea(3)   -> 9 
squareArea(6)   -> 36

*/  
 
function squareArea(x) { 
    console.log(x * x);
} 
 
squareArea(6);
 
 
/* 
  Double The Word 
Write a function named as doubleWord() which takes a string word as an argument and returns the 
given word back doubled when invoked. 
NOTE: Assume you will not be given an empty word. 
 
Examples: 
doubleWord("Tech")    -> "TechTech" 
doubleWord("Global")     -> "GlobalGlobal"

*/ 
 
function doubleWord(str) { 
    console.log(str + str);
}

doubleWord("Tech");

/* 
   Last Two Characters 
Write a function named as lastTwoCharacters() which takes a string word as an argument and returns 
the last two characters of the given word when invoked. 
NOTE: If the given word does not have 2 or more characters, then return the string back. 
 
Examples: 
lastTwoCharacters("Tech")  -> "ch" 
lastTwoCharacters("Global")   -> "al" 
lastTwoCharacters("")    -> "" 
lastTwoCharacters(" ")    -> " " 
lastTwoCharacters("1")    -> "1" 
 
 
*/ 
 
function lastTwoCharacters(str1) { 
    console.log(str1.slice(-2));
}
  
lastTwoCharacters("Tech");
 
/* 
   Middle 
Write a function named as middle() which takes a string word as an argument and returns the middle 
character if the string has odd length, and returns the middle two characters if the string has even 
length when invoked. 
NOTE: If the given word is empty, then return the empty string back. 
 
Examples: 
middle("Tech")    -> "ec" 
middle("Global")   -> "ob" 
middle("abcde")   -> "c" 
middle("1")     -> "1" 
middle("abc")     -> "b" 
middle(“1234”)    -> "23"

*/  
 
function middle(str3) { 
    if(str3.length % 2 === 0) console.log(str3);
    else console.log(str3.length / 2)
}
 
/* 
   Starts With Vowel 
Write a function named as startsVowel() which takes a string word as an argument and returns true if 
given string starts with a vowel letter, and false otherwise when invoked. 
NOTE: Vowel letters are A, E, O, U, I, a, e, o, u, i. 
 
Examples: 
startsVowel("Tech")    -> false 
startsVowel("Apple")     -> true 
startsVowel("abc")     -> true

*/ 

function startsVowel(str4) { 
    if(str4[0] === 'A' || str4[0] === 'E' || str4[0] === 'O' || str4[0] === 'U' || str4[0] === 'I' || str4[0] === 'a' || str4[0] === 'e' || str4[0] === 'o' || str4[0] === 'u' || str4[0] === 'i') { 
        console.log(true);
    }  
    else { 
        console.log(false);
    }
} 
 
startsVowel("Tech"); 
 
let t = (10 / 2 === 5 || "hello" + "world" === "helloworld") && (5 === "5" || true); 
console.log(t); 
 
function longer(str1, str2) { 
    if(str1.length > str2.length) console.log(str1);
    else if(str2.length > str1.length) console.log(str2); 
    else  console.log(str1);
} 
 
longer('tech', 'global');
console.log('\n-----------Task 1 -------------\n');

// Task 1 
/*
Write a function named hasUpperCase() which takes a string argument and 
return true if there is an uppercase letter and false otherwise.
Examples:
hasUpperCase("javascript")  -> false
hasUpperCase("John")  -> true
hasUpperCase("$125.0")  -> false
hasUpperCase("")  -> false
*/

function hasUpperCase(str) {
    let low = str.toLowerCase();
    console.log(str !== low);

}

hasUpperCase("javascript");
hasUpperCase("John");
hasUpperCase("$125.0");
hasUpperCase("");



console.log('\n-----------Task 2 -------------\n');

// Task 2 
/*
Write a function named noDigit() which takes a string argument and returns a 
new string with all digits removed from the original string .
Examples:
noDigit("")  -> ""
noDigit("Javascript")  -> "Javascript"
noDigit("123Hello")  -> "Hello"
noDigit("123Hello World149")  -> "Hello World”
noDigit("123Tech456Global149")  -> "TechGlobal"
*/

function noDigit(str) {
    let noNum = str.split('');

    const noNum1 = noNum.filter(x => typeof x === 'string');
    console.log(noNum1);
    //console.log(noNum1.join(''));

}

noDigit("Javascript");
noDigit("123Hello World149");


console.log('\n-----------Task 3 -------------\n');

// Task 3 
/*
Write a function named noVowel() which takes a string argument and returns a 
new string with all vowels removed from the original string .
Examples:
noVowel("TechGlobal")  -> "TchGlbl"
noVowel("AEOxyz")  -> "xyz"
noVowel("Javascript")  -> "Jvscrpt"
noVowel("")  -> ""
noVowel("125$")  -> "125$"
*/

function noVowel(str) {
    let   
}
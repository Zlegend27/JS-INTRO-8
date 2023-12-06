console.log('\n-----------Task 1 -------------\n');

// Task 1 
/* 
Write a function named hasLowerCase() which takes a string argument and 
returns true if there is a lowercase letter and false if it there isn’t. 
Examples:
hasLowerCase("")  -> false
hasLowerCase("JAVASCRIPT")  -> false
hasLowerCase("hello")  -> true
hasLowerCase("125$")  -> false
hasLowerCase("   a   ")  -> true
*/

function hasLowerCase(str) {
    for (const letter of str) {
        if (letter === letter.toLowerCase()) return true;
    }
    return false;

}
console.log(hasLowerCase("JAVASCRIPt"));

hasLowerCase("hello");

hasLowerCase("   a   ");


console.log('\n-----------Task 2 -------------\n');

// Task 2 
/*
Write a function named noZero() which takes an array of numbers as argument 
and returns the array back with all zeros removed.
Examples:
noZero([1])  -> [1]
noZero( [1, 1, 10] )  -> [1, 1, 10] 
noZero([0, 1, 10])  -> [1, 10]
noZero([0, 0, 0])  -> []
noZero([10, 100 0]) -> [10, 100]
*/


const noZero = (arr) => arr.filter(x => x !== 0);

console.log(noZero([1, 1, 10]));
console.log(noZero([0, 1, 10]));


console.log('\n-----------Task 3 -------------\n');

// Task 3
/*
Write a function named numberAndSquare() which takes an array of numbers 
as argument and returns a multidimensional array with all numbers squared. 
Examples:
numberAndSquare([1, 2, 3])  -> [[1, 1], [2, 4], [3, 9]]
numberAndSquare([0, 3, -6])  -> [[0, 0], [3, 9], [-6, 36]]
numberAndSquare([1, 4])  -> [[1,1], [4, 16]]
numberAndSquare([0, 0, 0])  -> [[0, 0], [0, 0], [0, 0]]
numberAndSquare([0, 1, -10])  -> [[0, 0], [1, 1], [-10, 100]]
*/

const numberAndSquare = (arr) => arr.map(num => [num, num ** 2]);

console.log(numberAndSquare([1, 2, 3]));

console.log('\n-----------Task 4 -------------\n');

// Task 4 
/*
Write a function named containsValue() which takes a string array and a 
string as arguments and returns a boolean value. Search the string variable 
inside of the array and return true if it exists in the array. If it doesn’t exist, 
return false.  
NOTE: Assume that array size is at least 1. 
NOTE: The method is case-sensitive.
Examples:
containsValue(["abc", "foo", "javascript"], "hello")  -> false
containsValue(["abc", "def", "123"], "Abc")  -> false
containsValue(["abc", "def", "123", "Javascript", "Hello"], "123")  -> true
*/

function containsValue(arr, str) {
    const contain = arr.reduce((result, curr) => {
        if (curr === str) result = true;
        return result;
    }, false);
    return contain;
}

console.log(containsValue(["abc", "foo", "javascript"], "hello"));
console.log(containsValue(["abc", "def", "123", "Javascript", "Hello"], "123"));


console.log('\n-----------Task 5 -------------\n');

// Task 5
/*
Write a function named reverseSentence() which takes a string as argument 
and returns the words in reverse order.  If there is no enough words reverse, 
return "There is not enough words!".
Examples:
reverseSentence("Hello")  -> "There is not enough words!"
reverseSentence("Javascript is fun")  -> "Fun is javascript"
reverseSentence("This is a sentence")  -> "Sentence a is this"
*/

function reverseSentence(str) {

    const arr = str.toLowerCase().split(' ');
    if (arr.length > 1) {
        const rev = arr.reverse();
        let fword = rev[0];
        let fletter = fword[0];
        fword = fword.replace(fletter, fletter.toUpperCase());
        rev[0] = fword;
        return rev.join(' ');

    }
    else return 'There is not enough words!';

}

console.log(reverseSentence("Javascript is fun"));


console.log('\n-----------Task 6 -------------\n');

// Task 6 
/*
Write a function named removeStringSpecialsDigits() which takes a string 
as argument and return a string without the special characters or digits.
Examples:
removeStringSpecialsDigits("123Javascript #$%is fun")  -> "Javascript is 
fun" 
removeStringSpecialsDigits("Cypress")  -> "Cypress"
removeStringSpecialsDigits("Automation123#$%")  -> "Automation"
*/

const removeStringSpecialsDigits = (str) => {
    const arr = [];
    for (const char of str) {
        if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90 ||
            char.charCodeAt() >= 97 && char.charCodeAt() <= 122 ||
            char.charCodeAt() === 32) {
            arr.push(char);
        }
    }
    return arr.join('');
}

console.log(removeStringSpecialsDigits("123Javascript #$%is fun"));


// Task 7
/*
Write a function named removeArraySpecialsDigits() which takes a string 
array as argument and return back without the special characters or digits.
Examples:
removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"])  -> 
["Javascript", "is", "fun"]
removeArraySpecialsDigits(["Cypress", "123$%", "###"])  -> ["Cypress", "", 
""]
removeArraySpecialsDigits(["Automation", "123#$%tool"])  -> ["Automation", 
"tool"]
*/

function removeArraySpecialsDigits(arr) {
    const removeSpecialDigit = arr.filter(char => char.filter(letter => {

        letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90 ||
        letter.charCodeAt() >= 97 && letter.charCodeAt() <= 122 ||
        letter.charCodeAt() === 32
    }));
        

        return removeSpecialDigit;
}

console.log(removeArraySpecialsDigits(["123Javascript", "#$%is", "fun"]));


// Task 8 
/*
Write a function named getCommons() which takes two string arrays as 
arguments and returns all the common words.
Examples:
getCommons( ["Javascript", "is", "fun"], ["abc", "xyz", "123"] ) 
-> []
getCommons( ["Javascript", "is", "fun"], ["Javascript", "C#", "Python"] ) 
-> ["Javascript"]
getCommons( ["Javascript", "C#", "C#"], ["Python", "C#", "C++"] )  -> ["C#"]
*/

function getCommons(arr1, arr2) {
    const commonArr = arr1[0];

}



// Task 9 
/*
Write a function named noXInVariables() which takes an array as argument 
and return an array that all the x or X removed from the elements. 
NOTE: If the element is existing of x or X letters only, then completely remove 
the element.
Examples:
noXInVariables(["abc", 123, "#$%"])  -> ["abc", 123, "#$%"]
noXInVariables(["xyz", 123, "#$%"])  -> ["yz", 123, "#$%"]
noXInVariables(["x", 123, "#$%"])  -> [123, "#$%"]
noXInVariables(["xyXyxy", "Xx", "ABC"])  -> ["yyy", "ABC"]
*/

function noXInVariables(arr) {
    const removeX = arr.filter(str => str === 'x' || str === 'X');

    return removeX;
}

console.log(noXInVariables(["xyz", 123, "#$%"]));
console.log(noXInVariables(["x", 123, "#$%"]));

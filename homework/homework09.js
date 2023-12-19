// Task 1 
/*
Write a function named fizzBuzz1() which takes a number argument and 
returns "Fizz" if the given number is divisible by 3, "Buzz" if the number is 
divisible by 5, and "FizzBuzz" if the number is divisible by both 3 and 5. 
Otherwise, it will return the number itself. 
Examples:
fizzBuzz1(0)  -> "FizzBuzz"
fizzBuzz1(1)  -> 1
fizzBuzz1(3)  -> "Fizz"
fizzBuzz1(5)  -> "Buzz"
fizzBuzz1(30)  -> "FizzBuzz"
fizzBuzz1(10)  -> "Buzz"
fizzBuzz1(15)  -> "FizzBuzz"
fizzBuzz1(-15)  -> "FizzBuzz"
*/

const fizzBuzz1 = (num) => {
    if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
    else if (num % 3 === 0) return 'fizz';
    else if (num % 5 === 0) return 'buzz';
    else return num;
}

console.log(fizzBuzz1(0));
console.log(fizzBuzz1(1));
console.log(fizzBuzz1(5));
console.log(fizzBuzz1(15));


// Task 2 
/*
Write a function named fizzBuzz2() which takes a number argument and 
returns and array consist of numbers starting from 1 to given number. However, 
it will return "Fizz" for the numbers divided by 3, "Buzz" for the numbers divided 
by 5, and "FizzBuzz" for the numbers divided both by 3 and 5.
Examples:
fizzBuzz2(3)  -> [ 1, 2, 'Fizz' ]
fizzBuzz2(5)  -> [ 1, 2, 'Fizz', 4, 'Buzz' ]
fizzBuzz2(10)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz' ] 
fizzBuzz2(15)  -> [ 1 , 2 , 'Fizz' , 4 , 'Buzz' , 'Fizz' , 7, 8 , 'Fizz' , 'Buzz', 11, 'Fizz'. 
13, 14,  'FizzBuzz' ] 
fizzBuzz2(2)  -> [ 1, 2 ]
*/

const fizzBuzz2 = (num) => {
    const arr = [];

    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) arr.push('fizzbuzz');
        else if (i % 3 === 0) arr.push('fizz');
        else if (i % 5 === 0) arr.push('buzz');
        else arr.push(i);
    }

    return arr;
}

console.log(fizzBuzz2(3));
console.log(fizzBuzz2(10));
console.log(fizzBuzz2(15));


// Task 3 
/*
Write a function named findSumNumbers() which takes a string argument 
and returns sum of the all numbers appears in the string.
Examples:
findSumNumbers("abc$") -> 0
findSumNumbers("a1b4c  6#") -> 11
findSumNumbers("ab110c045d") -> 155
findSumNumbers("525") -> 525
findSumNumbers("3 for 10 dollars") -> 13
*/

const findSumNumbers = (str) => {               
    const digits = '1234567890';                
    let stringNum = '';                         
    let sum = 0;                                
    for(const char of str){                     
        if(digits.includes(char)){              
            stringNum += char;                  
        }
        else{
            stringNum += ' ';                   
        }
    }
    const arr = stringNum.split(' ');           
    const nums = arr.filter(x => x !== '');     
    for(const num of nums){                     
        sum += parseInt(num);                  
    }
    return sum;                                 
}

console.log(findSumNumbers("abc$"));               
console.log(findSumNumbers("a1b4c  6#"));           
console.log(findSumNumbers("ab110c045d"));        


// Task 4 
/*
Write a function named findBiggestNumber() which takes a string argument 
and returns the biggest number appears in the string.
Examples:
findBiggestNumber("abc$")  -> 0
findBiggestNumber("a1b4c  6#")  -> 6
findBiggestNumber("ab110c045d")  -> 110
findBiggestNumber("525")  -> 525
findBiggestNumber("3 for 10 dollars")  -> 10
*/

const findBiggestNumber = (str) => {
    const digit = '1234567890';
    let sNum = '';
    
    for(const i of str) {
        if(digit.includes(i)) {
            sNum += i
        }
        else  sNum += ' ';
    }
    
    return Math.max(parseInt(sNum));

}
console.log(findBiggestNumber("abc$"));
console.log(findBiggestNumber("ab110c045d"));


// Task 5 
/*
Write a function named countOccurrencesOfCharacters() which takes a 
string argument and returns the count of repeated characters in the String. 
NOTE: If given String is empty, then return empty String. 
NOTE: It is case sensitive.
Examples:
countOccurrencesOfCharacters("")  -> ""
countOccurrencesOfCharacters("abc")  -> "1a1b1c"
countOccurrencesOfCharacters("abbcca")  -> "1a2b2c1a"
countOccurrencesOfCharacters("aaAAa")  -> "2a2A1a”
countOccurrencesOfCharacters("www" ) -> "3w"
*/

const countOccurrencesOfCharacters = (str) => {
    const arr = str.split('');

    for(const i of arr) {
        const    
    }
}



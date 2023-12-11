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
    let sum = 0;
    str = str.split('').filter(x => x >= 0 || x <= 9);
    for(const num of str) {
        sum += num;
    }

    return sum;
}

console.log(findSumNumbers("a1b4c  6#"));
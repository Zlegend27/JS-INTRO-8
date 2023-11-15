const numbers = [2, 5, 10, 7, 8, 1, 0];

// using map
const num = numbers.map(x => x * 3);
console.log(num);

const numbersEvenorOdd = numbers.map(x => x % 2 === 0);
console.log(numbersEvenorOdd);


// using filter
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);


// using reduce
const sum = numbers.reduce((acc, curr) => acc += curr, 0);
console.log(sum);

const countEven = numbers.reduce((counter, curr) => curr % 2 === 0 ? counter+1 : counter, 0);
console.log(countEven);


/*

map        --> you return a new array having the same size with the original array but elements are replaced

filter     --> you return a partial array and the elements within that array matching a specific condition

reduce     --> visits each element in an array and returns a single result 


Counting elements 
    count evens                  -> 4
    count odds                   -> 3
    count number divisible by 3  -> 1
    count number divisible by 4  -> 2
    count number divisible by 5  -> 3
    count positive numbers       -> 6

Finding specific element
    find the greatest number     -> 10
    find the smallest number     -> 0

Accumulate elements 
    find sum of numbers          -> 33
    find product of the numbers  -> 0
    find average of the numbers  -> 4.714

Filtering and grouping elements
    even numbers                 -> [2, 10, 8, 0]
    odd numbers                  -> [5, 7,1]
    positive numbers             -> [2, 5, 10, 7, 8, 1]

Change all the elements
    multiply each element by 3   -> [6, 15, 30, 21, 24, 3, 0]
    true for even, false for odd -> [true, false, true, false, true]

*/
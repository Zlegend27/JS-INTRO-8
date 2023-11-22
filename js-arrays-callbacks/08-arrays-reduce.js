// syntax ------>              numbers.reduce(() => [], ); numbers.reduce(() => [], 0);

const numbers = [5, 10, 100];

// sum of the numbers                   -> 115

console.log(numbers.reduce((sum, curr) => sum + curr, 0)); // 115

// count the numbers divisible by 10    -> 2
// count the even numbers               -> 2

console.log(numbers.reduce((count10, curr) => curr % 10 === 0 ? count10 + 1 : count10, 0)); // 2

console.log(numbers.reduce((acc, curr) => curr % 2 === 0 ? acc + 1 : acc, 0));


// find the min number
// find the max number
console.log(numbers.reduce((max, curr) => Math.max(max, curr), -Infinity));
console.log(numbers.reduce((min, curr) => Math.min(min, curr), Infinity));


function abc(sum, number) {
    return sum + number;
}

console.log(abc(3, 5));


const fruits = ['Apple', 'Orange', 'Kiwi', 'Pineapple', 'Mango', 'Melon']; 

// count how many elements has 'apple' ignoring cases
// count how many elements has 'i' ignoring cases
// cont how many elements ends with 'e'



let countApple = 0;

for(const fruit of fruits) {
    if(fruit.toLowerCase().includes('apple')) countApple++;
}

console.log(countApple);

console.log(fruits.filter(fruit => fruit.toLowerCase().includes('apple').length));

fruits.reduce((countApple, curr) => {
    if(curr.toLowerCase().includes('apple')) return countApple + 1;
    else return countApple;
})

/* 
write a function that takes any number of arguments and returns their sum

sum()         --> 0
sum(5)        --> 5
sum(5, 2)     --> 7
sum(3, 5, 2)  --> 10
*/ 

function sum(...args) {
    let sum = 0;

    for(const num of args) {
        sum += num;
    }

return sum;
}

console.log(sum());
console.log(sum(5));
console.log(sum(5, 2));
console.log(sum(3, 5, 2));
console.log(sum(7, 3, 5, 2));
console.log(sum(10, 5, 6, 3, 2));


function product(num1 = 0, ...args) {
    let product = num1;
    for(const num of args) {
        product *= num;
    }

    return product;
}

console.log(product());
console.log(product(5));
console.log(product(5, 2, 3, 4, 5));
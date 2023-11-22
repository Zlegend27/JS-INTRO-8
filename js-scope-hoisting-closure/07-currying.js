// Regular function 
function product(x, y) {
    return x * y;
}

console.log(product(3, 5));
console.log(product(3, 2));

// Currying way 
function multiply(x) {
    
    function inner(y) {
        return x * y;
    }

    return inner;
}


const doubled = multiply(2);
const trippled = multiply(3);

console.log(doubled(10)); // 20
console.log(doubled(7)); // 14
console.log(trippled(3)); // 6
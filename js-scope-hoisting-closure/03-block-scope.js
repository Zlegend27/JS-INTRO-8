// Block scope is introduced with ES6

console.log(x); // undefined
console.log(y); // error
console.log(z); // error



// Block Scope
{
    var x = 10;
    let y = 11; 
    const z = 12;

    console.log(x);
    console.log(y);
    console.log(z);

}


// this keyword

console.log(this); // {}
// Note: you might get different values
// For example on client side code you might get: Window object
// on server side code you might get: global object


// 'this' in objects 

// Implicit binding  --------------------------------
let person = {
    name: 'Alex',
    greet: function() {
        console.log(`Hi, ${this.name}`);
    },
};

person.greet(); // 'this' is referring to person object



// Explicit binding ----------------------------------
function greet() {
    console.log(`Hi, ${this.name}`);
}
let person2 = {
    name:'Alex',
};

greet();
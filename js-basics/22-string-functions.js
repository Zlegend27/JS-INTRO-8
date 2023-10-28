// creating a variable that stores string 
let name = 'John'; 
let name2 = "John"; 
let name3 = `John`; 
 
console.log(name); // 'John'
console.log(name2); // 'John'
console.log(name3); // 'John'  
 
let fname = 'John';
let lname = 'Doe'; 
 
console.log('The full name is ' + fname + ' ' + lname + '.'); // Old way of doing things 
 
// ES6 introduced backticks `` --> string templates which makes variable or expression insertion better 
console.log(`The full name is ${fname} ${lname}.`); 
 
//console.log(`The favorite book is ${favBook}
//The favorite color is ${favColor}
//The favorite number is ${favNumber}`); 
 
//console.log( 
//    `  User who joined this program is ${firstName} ${lastName}. ${firstName}'s
//    age is ${age}. ${firstName}'s email address is ${emailAddress} and 
//    phone number is ${phoneNumber} and address is ${address}.`
//    );  
      
 
// Interpolation 
let quantity = 5, product = 'Pen', price = 2; 
 
// I bought 5 Pen items for $10. 
console.log('I bought ' + quantity + ' ' + product + ' item for $' + quantity * price + '.'); 
console.log(`I bought ${quantity} ${product} items for $${quantity * price}.`);
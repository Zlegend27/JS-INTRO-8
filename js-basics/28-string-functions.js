// Extracting Partial Strings 
 
let sentence = 'I like JavaScript'; 
 
// One charecter -> [] 
// Partial string -> one or more charecters -> slice(), substring 
 
// slice() 
console.log(sentence.slice(7)); // 'JavaScript'
console.log(sentence.slice(2, 6));  
console.log(sentence.slice(11)); // script 
console.log(sentence.slice(7, 11)); // Java 
 
// substring 
console.log(sentence.substring(7)); // 'JavaScript'
console.log(sentence.substring(2, 6));  
console.log(sentence.substring(11)); // script
console.log(sentence.substring(7, 11)); // Java  
 
// slice() vs substring() 
let name = 'Alexander'; 
console.log(name.substring(-5)); // 'Alexander' 
console.log(name.slice(-5)); // 'ander' 
 
console.log(name.substring(-5, -2)); // ''
console.log(name.slice(-5, -2)); // and
console.log(name.slice(-2, -5)); // '' 
 
let city = 'Chicago'; 
 
// Retrieve and combine first 2 and last 2 charecters of the city variable -> 'Chgo' 
console.log(city.slice(0, 2) + city.slice(-2));  
 
// split()
let str = 'Apple Bannana Pineapple Grapes';  
 
const fruits = str.split(' '); 
 
console.log(fruits);
console.log(fruits.length);
 
let text = 'I will do more practices today'; 
 
// How many words do you have in this text? 
 
console.log(text.split(' ')); 
console.log(text.split(' ').length); // 6 
 
console.log(text.split('do'));
console.log(text.split('will do more practices')); 
 
console.log('Hello'.split('')); // [ 'H', 'e', 'l', 'l', 'o' ] 
console.log('Hello World'.split()); // [ 'Hello World' ]  


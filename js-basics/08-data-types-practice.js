/* 
create different variables to store below information 
 
address = 'Chicago, IL'
age = 25 
isWeatherNiceToday = true 
price = 10.25 
 
print all the variables above with proper messages 
find and output all the variable types using typeof
*/ 
 
let adress = 'Chicago, IL';
let age = 25;
let isWeatherNiceToday = true; 
let price = 10.25; 
 
console.log('I currently reside in  ' + adress);
console.log('I am currently  ' + age + 'years old');
console.log('Is the weather nice today?  ' + isWeatherNiceToday);
console.log('the price of this item is  ' + price); 
 
console.log(typeof adress);
console.log(typeof age)
console.log(typeof isWeatherNiceToday);
console.log(typeof price); 
 
// tricky questions 
console.log(typeof undefinded); // undefined
console.log(typeof null); // object 
 
console.log(typeof 25); // number 
 
console.log(typeof 'null'); // string 
 
// Be careful 
let name = 'John'; 
 
console.log('The name is ' + name); // hard coded and not dynamic
 
console.log(typeof name); 
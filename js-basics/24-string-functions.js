// Changing cases 
 
let greeting = 'Good Morning!'; 
 
let upperGreeting = greeting.toLowerCase(); // 'good morning!'
let lowerGreeting = greeting.toUpperCase(); // 'GOOD MORNING!' 
 
console.log(upperGreeting); 
console.log(lowerGreeting); 
 
let quote = 'The total price is $125.99'; 
console.log(quote.toLowerCase());
console.log(quote.toUpperCase()); 
  
console.log(greeting); 
console.log(quote); 
 
let result = quote.split(' ').map(x => x[0].toUpperCase() + x.slice(1).toLowerCase).join(" "); 
 
console.log(result);
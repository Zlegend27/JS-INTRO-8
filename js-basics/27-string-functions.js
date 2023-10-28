// searching in strings 
 
// search()  
 
let info = 'Tech Global is a Software Training school and Tech Global was founded in 2020.';  
 
console.log(info.search('e')); // 1
console.log(info.search('a'));  // 9
 
console.log(info.search('Tech')); // 0
console.log(info.search('Tech Global')); // 0
console.log(info.search('Software')); // 17
  
console.log(info.search('tech')); // -1 or not existent here 
 
// indexOf() 
 
let fName = 'John Doe'; 
 
console.log(fName.indexOf('o')); // 1
console.log(fName.lastIndexOf('o')); // 6 
 
console.log(fName.indexOf('John')); // 0
console.log(fName.indexOf('Doe'));  // 5
 
console.log(fName.indexOf(fName));  // 0 
 
console.log(fName.indexOf(' ')); // 4
console.log(fName.lastIndexOf(' ')); // 4 
 
console.log(fName.indexOf('A')); // -1
console.log(fName.indexOf('Alex')); // -1 
console.log(fName.lastIndexOf('A')); // -1
console.log(fName.lastIndexOf('Alex')); // -1
 
// includes() 
let text = 'Today is Saturday and we are practicing String methods'; 
 
console.log(text.includes('Saturday'));  // true
console.log(text.includes('a')); // true
 
console.log(text.includes('JavaScript')); // false
console.log(text.includes('Methods')); // false 
console.log(text.includes(' ')); // true
console.log(text.includes('')); // always true

console.log(text.includes('1')); // false 
  
// startsWith() vs endWith() 
console.log(text.startsWith('T')); // true 
console.log(text.startsWith('Today')); // true 
console.log(text.startsWith('Today is Saturday')); // true 
console.log(text.startsWith(text)); // true  - always  
 
console.log(text.endsWith('s'));
console.log(text.endsWith('methods'));
console.log(text.endsWith('String methods'));
console.log(text.endsWith(text)); // true - always 
 
console.log(text.startsWith(''));
console.log(text.endsWith('')); 
 


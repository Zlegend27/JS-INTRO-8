let name = 'Alex'; 
 
// length property can be used to get the number of charecters in a string 
 
let size = name.length; // 4 
 
console.log('The string charecters = '+ size); // 4  
 
// How to get specific charcters from a string  
let thirdChar = name[2]; 
let firstChar = name[0]; 
 
console.log(thirdChar); // e
console.log(firstChar); // A 
 
console.log(name[3]); // x 
 
// Getting the last charectrer form a string dynamically 
let lName = 'Morgan'; 
console.log(lName[lName.length - 1]); // n 
 
//  charAt() function can also be used to get specific charecters from a string by giving an index as an argument
let city = 'Chicago'; 
console.log(city[2]); // i
console.log(city.charAt(2)); // i  
 
// The difference beetween [index] and charAt(index) 
console.log(city[-5]); // undefined 
console.log(city.charAt(-5)); // '' empty string 
 
// charCodeAt() -> it returns the ASCII representation of the given charecter 
let country = 'CANADA';  
console.log(country.charCodeAt(1)); // 65
console.log(country.charCodeAt(0)); // 67
console.log(country.charCodeAt(2)); // 78 
 
console.log(typeof country[5]); // string
console.log(typeof country[15]); // undefined 
console.log(typeof country.charAt(15));
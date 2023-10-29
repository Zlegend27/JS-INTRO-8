let cities = ['Chicago', 'Miami', 'Toranto']; 
 
cities = 25; 
 
console.log(cities);
console.log(typeof cities); 
 
console.log(cities[0]); // Chicago
 
console.log(cities[-1]); // undefined
console.log(cities[5]); // undefined 
 
cities[1] = 'Berlin'; // updates the index 1 with the value 'Berlin'
 
console.log(cities[1]); // Berlin 
 
// creating an array from a string using split method 
let name = 'John Doe'; 
 
// Each letter in an array 
const charecters = name.split('');  
console.log(charecters);  
 
let sentence = 'I like JS arrays'; 
const words = sentence.split(' '); 
console.log(words);
 
// Count how many words do you have in a sentence 
let sent = 'The conflicts with GIT was hard but I am happy to be back to JS'; 
console.log(sent.split(' ').length); 
 

// collections - arrays are used to store multiple information of same type usually 

const students = ['John' , 'Max', 'Jane', 'Alex']
 
// How to output the array elements
console.log(students); 
 
// how to access a single element within the array   - we use index of the element and property access
console.log(students[2]);
console.log(students[3]); 
console.log(students[0]); 
 
const numbers = [10, 15, 20.5, -5, -3, 0, 35 ]; 
let numberAtIndexOf2 = numbers[2]; 
 
console.log(numberAtIndexOf2);
console.log(typeof numberAtIndexOf2);
console.log(typeof students);
/*
 when to create a seperate variable? 
 if you use it only once, than do not create anew variable 
 if you use it multiple times, than create a new variable
 */ 
 
 // How to update an existing element   
 console.log(numbers);
numbers[0] = 25;
console.log(numbers); 
 
const cities = ['Berlin', 'Chciago', 'Toranto', 'Miami'];
console.log(cities.length); // 4 
 
let size = cities.length; 
console.log(size); // 4 
 
// Berlin = 0, Chciago = 1, Toranto = 2, Miami = 3 
console.log(cities[3]); 
console.log(cities[1]);
console.log(cities[0]);
 
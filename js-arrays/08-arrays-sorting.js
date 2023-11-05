const arr1 = [1, 2, 5, 100, 21 ]; 
const arr2 = ['Ali', 'Max', 'Johnson', 'John', 'Alex', 'bob', 'alice']; 
 
const arr3 = arr2.sort(); 
 
console.log(arr3);
console.log(arr2); 

arr1.sort();
console.log(arr1); // [ 1, 100, 2, 21, 5 ] 
 
// We want to get [[ 1, 2, 5, 21, 100 ]] 
const numbers = [1, 2, 5, 100, 21 ]; 
numbers.sort((x, y) => x - y); 
 
console.log(numbers); // [ 1, 2, 5, 21, 100 ]
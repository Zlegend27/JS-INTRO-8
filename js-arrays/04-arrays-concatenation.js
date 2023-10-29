const arr1 = [1,2,3];
const arr2 = [4,5,6];
const arr3 = [7,8,9]; 
 
const arr4 = arr1.concat(arr2); 
const arr5 = arr2.concat(arr1);
const arr6 = arr1.concat(arr2).concat(arr3);
const arr7 = arr1.concat(arr2.concat(arr3)); 


console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ] 
console.log(arr5); // [ 4, 5, 6, 1, 2, 3 ]
console.log(arr6); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(arr7); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ---> adds arr2 and arr3 together first than arr1 
 
// spread operator 
const words = ['Hello', 'Hi', 'World'];
const words2 = ['Good', 'Morning'];
 
console.log(words); // [ 'Hello', 'Hi', 'World' ]
console.log(words2); // [ 'Good', 'Morning' ]
 
console.log(words.concat(words2)); // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ]
console.log([...words, ...words2]); // [ 'Hello', 'Hi', 'World', 'Good', 'Morning' ] 
console.log([...words2, ...words]); // [ 'Good', 'Morning', 'Hello', 'Hi', 'World' ] 
 
const words3 = ['Sunday', ...words, 'Monday', ...words2]; 
 
words3.push(...arr1); 
console.log(words3);  
 
//Find min and max numbers from below array
// Max is 10 and min is -2
const numbers = [5, 7, -2, 10]; 
 
let min = Math.min(...numbers); 
let max = Math.max(...numbers); 

console.log(min);
console.log(max);
const batch = [
    ['Alex', 'Alice'],
    ['John', 'Jane'],
    ['Max', 'Mark']
]; 
 
const batchFlat = batch.flat(); 
 
console.log(batch); 
console.log(batchFlat); 
 

const arr = [ 
    [  
        [1, 2, 3],
        [4, 5, 6]
    ], 
    [
    [7, 8],
    [9, 10, 11, 12],
    [13, 14, 15] 
    ]  
]; 
 
const arrFlat = arr.flat(); 
// const arrFlat = arr.flat(2); 
// const arrFlat = arr.flat(infinity); 
 
console.log(arr); 
console.log(arrFlat); 
 
// [1, 4, 5, 7, 8, 9, 13]
let num1 =3; 
let num2 = 5; 
let num3 = 3; 
let num4 = '3'; 
let num5 = '5'; 
 
// == checks if two variable values are equal. Data types are not consdiered
console.log(num1 == num3); //true
console.log(num1 == num2); // false 
 
console.log(num1 == num4); // 3 == '3' true 
console.log(num1 + 2 == num5); // 5 == '5' true 
 
// === checks if two variable values and their data typs are equal. STRICT EQUALITY 
console.log(num1 === num3); // 3 === 3 true 
console.log(3 === '3'); // false 
console.log(3 === '5'); // false 
 
// != vs !== are used to check if two variables are not equal 
console.log(3 != 3); // false 
console.log(5 !== 5); // false 

console.log(3 != 7); // true 
console.log(5 != '7'); // true 
 
console.log(3 !== '4'); // true 
console.log(3 !== '3'); // true 
console.log(3 !== 3); // false 
 
// > vs < are used to check if variables are less than or greater than each other 
console.log(5 > 2); // true
console.log(35 < 25 * 2); // true
 
// >= vs <= are used to check if variables are less than or equal OR greater or equal than each other  
console.log(3 < 3); // false 
console.log(3 <= 3); // true 
console.log(2 * 5 + 3 >= 13); // true 
 
// tricky tricky 
console.log('3' + '5' > 30); // true 

console.log(true > false); // true is considrend as 1 and false is considred as zero  
console.log('Helo' > ''); // true as an actual text is considerned as true while empty string is considred as false 
console.log(null === undefined); // false as they are different data types 
console.log(null == undefined); // true as both null and undefined are considered as false 
console.log(NaN == false); // false 
 
console.log((10 >= 10) < 20); // true
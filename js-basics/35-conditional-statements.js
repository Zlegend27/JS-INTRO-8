// Teenage
  
let age =11; 
 
if(age >= 10 && age <= 19) { // this block will execute only if the condition is true
    console.log(`${age} is a teenager!`);
} 
else { // this block will execute only if the condition is false
    console.log(`${age} is NOT a teenage!!!`);
}
 
if('Hello') { // true, or truthy or any expression that vealuates to true
    console.log('This is if block');
} 
 
 
// Another example of if else 
 
let number1 = 3, number2 = 1; 
 
if(number1 > number2) { // number1 is greater
    console.log('this is if block running');
    console.log(`the absolute diffence = ${number1 - number2}`);
} 
else { // number1 is not greater 
    console.log("this is else block running");
    console.log(`the absolute diffence = ${number2 - number1}`);
}
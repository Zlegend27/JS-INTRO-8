/*
Generate a random number between -2 and 2 (both inclusive)
Print "The number is POSITIVE" if the generated number is positive
Print "The number is NEGATIVE" if the generated number is negative
Print "The number is ZERO" if the generated number is zero
*/


let ranNum = Math.floor(Math.random() * 5) - 2; 

 
if(ranNum > 0) { 
    console.log(`The random number is positive`);
} 
else if(ranNum < 0) { 
    console.log(`The random number is negitive`);
} 
else { 
    console.log('The number is ZERO');
}  
 

/*
Generate a random number between 1 and 12 (both inclusive) are considered as months
Print "Winter" if the generated number is 12, 1, or 2
Print "Spring" if the generated number is 3, 4, or 5
Print "Summer" if the generated number is 6, 7, 8
Print "Fall" if the generated number is 9, 10, 11
*/
 
let num = Math.floor(Math.random() * 12) + 1; 
 
if(num === 12 || num === 1 || num === 2) { 
    console.log('Winter');
} 
else if(num === 3 || num === 4 || num === 5) { 
    console.log('Spring');
} 
else if(num === 6 || num === 7 || num === 8) { 
    console.log('Summer'); 
} 
else { 
    console.log('Fall');
} 
 

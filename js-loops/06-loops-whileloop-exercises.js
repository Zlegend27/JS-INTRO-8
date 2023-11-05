// Generate an even number between 1 and 10 using math.random() 
// Calculate how many attempts it takes to generate it 
 

let ran1; // global scope
let attempt = 0; 
 
do {
    ran1 = Math.floor(Math.random() * 10) + 1; 
    attempt ++; 
} while(ran1 % 2 !== 0); 
 
console.log(`The first even number generated is ${ran1} and it took ${attempt} times to generate it`); 
 

// Generate an even number between 1 and 10 using math.random() 
// Calculate how many attempts it takes to generate 7

attempt = 0;

do {
    ran1 = Math.floor(Math.random() * 10) + 1;
    console.log(ran1);
    attempt ++;
} while(ran1 !== 7); 
 
console.log(attempt); 
 
// for loop solution 
 
let attemptFor = 0; 
 
for( ; ; ) { 
    let random = Math.floor(Math.random() * 10) + 1;
    attemptFor++; 
     
    if(random === 7) break;
} 
 
console.log(attemptFor);
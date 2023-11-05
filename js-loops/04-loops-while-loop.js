let i = 1;

while (i <= 5) {
    console.log(i);
    i++;
} 
 
console.log('The rest of the code'); 
 
i = 1; 
let countEvan = 0;

while (i <= 10) {
    if(i % 2 === 0) countEvan++;
    i++;
} 
 
console.log(countEvan); 
 
// infinite loop 
while(true) {
    console.log('Hello World');
}
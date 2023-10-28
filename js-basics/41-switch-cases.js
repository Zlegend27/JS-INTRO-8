/* 
we will print the day based on the a random number
we will write a code that generates a random number bt 0 and 6 both inclusive 
 
0 -> Sunday 
1 -> Monday 
. 
. 
.
 
*/

let day = Math.floor(Math.random() * 7);

if (day === 0) console.log('Sunday');
else if (day === 1) console.log('Monday');
else if (day === 2) console.log('Tuesay');
else if (day === 3) console.log('Wensday');
else if (day === 4) console.log('Thursday');
else if (day === 5) console.log('Friday');
else console.log('Saturday');

// Switch instead of if else 
switch (day) { // your variable-value here
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break; 
    case 2: 
        console.log('Tuesday');
        break; 
    case 3: 
        console.log('Wensday');
        break; 
    case 4: 
        console.log('Thursday'); 
        break; 
    case 5: 
        console.log('Friday'); 
        break; 
    case 6: 
        console.log('Saturday'); 
        break;
    default:
        console.error('error')
} 
 
  
/*  
We will print the weekday or weekend based on the a number from 0 to 6 
 
0 -> weekend
6 -> weekend 
1 -> weekday 
 
*/ 
 
let randomDay = Math.floor(Math.random() * 7); 

if (randomDay === 0) console.log('Weekend');
else if (randomDay === 6) console.log('Weekend');
else console.log('Weekday'); 
 
// Do the same task with switch 
 
switch (randomDay) { 
    case 0: 
    case 6: 
        console.log('Weekend'); 
        break;
    default: 
        console.log('Weekday');
} 
 
// The best way to have switch for above example 
switch (true) { 
    case randomDay === 0 || randomDay === 6: 
        console.log('Weekend');
        break; 
    default: 
        console.log('Weekday');
} 
 
 
/* 
We have a age and trying to find the demographic
0-20 (inclusive) -> Young 
21-55 (inclusive) -> Adult
56+               -> Senior 
  
*/ 
 
let age = Math.floor(Math.random() * 100); // 0 and 99 inclusive
console.log(`The age randomly generated is = ${age}.`);  
  
// else if Solution
if(age < 21) console.log('Young');
else if(age < 56) console.log('Adult');
else console.log('senior'); 
  
// Ternary Solution
console.log(age < 21 ? 'Young' : age < 56 ? 'Adult' : 'Senior'); 
 
// Switch solution
switch (true) { 
    case age < 21:
        console.log('Young');
        break; 
    case age < 56: 
        console.log('Adult');
        break;
    default: 
        console.log('senior');
}
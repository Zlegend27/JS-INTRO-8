/* 
 write a program that outputs numbers from 5 to 25 
 5
 6
 7
 .
 .
 .
 24
 25
  
start: 5 
termination: 25
update: ++ (increment)
*/



for(let i = 5; i <=25; i++) { 
    console.log(i);
} 
 
 
// write a program that outputs number between 15 and 1 descending 
 

for(let i = 15; i >= 1; i--) {
    console.log(i);
} 
 
 
for(let i = 0; i <= 10; i ++){ 
    if(i % 2 === 0) console.log(i); // 0 2 4 6 8 10
} 
 
/*
Write a program to check numbers from 1 to 50 (both included) and ouput all the numbers that can be divided by 5
        Expected output:
        5
        10
        15
        .
        .
        .
        40
        45
        50 
*/

for(let i = 1; i <= 50; i++) { 
    if(i % 5 === 0) console.log(i);
} 
 

/*
Write a program that finds the sum of numbers from 1 to 5 (both inclusive)

1 + 2 + 3 + 4 + 5

15
*/

let sum = 0;

for(let i = 1; i <= 5; i++) { 
    sum += i;
} 
 
console.log(sum); 

/*
Write a program that finds the sum of numbers from 10 to 15 (both inclusive)

10 + 11 + 12 + 13 + 14 + 15

75
*/
 
let sum1 = 0; 
 
for(let i = 10; i <= 15; i++) { 
    sum1 += i;
} 
 
console.log(sum1); 
 
/*
Write a program that generates a random number between 10 and 20 (both inclusive)
And it outputs all the odd numbers starting from 1 to random number (both inclusive)
 
start: 1 
termination: random bt 10 and 20
update: ++ (increment)

*/

 // Math.floor(Math.random() * (max - min + 1)) + min

let num = Math.floor(Math.random() * (20 - 10 + 1)) + 10; 
 
for(let i = 1; i <= num; i++) { 
    if(i % 2 !== 0) console.log(i);
}  
 
 
/*
Print all the numbers between 2 random numbers in the range of 1 to 10 (both inclusive) in ascending order

r1 r2
7, 5    -> 5 6 7
4, 8    -> 4 5 6 7 8
5, 5    -> 5
*/ 
 
let random1 = Math.floor(Math.random() * 10) + 1; 
let random2 = Math.floor(Math.random() * 10) + 1;  
 
if(random1 > random2) { 
    for(let i = random2; i <= random1; i++) {
        console.log(i);
    }
}
else {
    for(let i = random1; i <= random2; i++) {
        console.log(i);
    }
} 
 
// wayy easier with math.min() and math.max() 

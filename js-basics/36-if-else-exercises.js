/* 
english exam 
passing score is 60 or above 
 
we will write a prgram to check if we pass the exam or failed 
 
60 or above --> PASS 
else --> FAIL 
 
*/ 
 
let english_exam_score; // any value between 0 and 100 

if(english_exam_score >= 60) { // if english exam score is greater than or equal 60  --> console--log--Pass;
    console.log('PASS'); 
} 
else { 
    console.log('FAIL');
} 
 
/* 
Retirement age is 65 

we will write a program to check if we can be retired or not. 
 
age is greater than or equal to 65 --> YOU CAN GET RETIRED 
else --> back to work buddy!!! 
 
*/ 
 
let age = 21; 
 
if(age >= 65) { 
    console.log('YOU CAN GET RETIRED');
} 
else { 
    console.log('back to work buddy!!!');
} 
 
/* 
You will be given a number 
 
we will write a p[rgram to chewck if the number is even or odd 
 
if the number is even --> EVEN 
else ODD 
*/ 
 
let number = Math.floor(Math.random() * 10); 
 
if(number % 2 == 1) { 
    console.log('ODD'); 
} 
else { 
    console.log('EVEN');
} 
 
/*
Generate a random number between 0 and 1 (both inclusive)
Print "The number is ZERO" if the generated number is zero
Print "The number is ONE" if the generated number is one
*/ 
 
let num = Math.floor(Math.random() * 2); 
 
if(num === 0) {   
    console.log('The number is zero');
} 
else { 
    console.log('The number is one');
}

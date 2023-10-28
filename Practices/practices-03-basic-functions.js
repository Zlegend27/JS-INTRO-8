// basic functions 
 
/* 
  
   Task 1 
    
   Write a function named as tripleWord() which takes a string word as an argument and returns the given word back tripled when invoked.

NOTE: Assume you will not be given an empty word. 
 
Examples:
tripleWord("Tech") 	-> "TechTechTech"
tripleWord("Global") 	-> "GlobalGlobalGlobal" 

*/ 
 

 
function trippleWord(s) { 
    console.log(s.toString().repeat(3));
} 
 
trippleWord('Tech'); 
 
 
/* 
   
    Task 2

Write a function named as celciusToFahrenheit() which takes a number to be considered as Celcius value and returns 
the Fahrenheit value when invoked.

Conversion Formula: The function uses the formula (celsius * 9) / 5 + 32 to perform the conversion from Celsius to 
Fahrenheit. 
    Multiply the Celsius temperature by 9.
    Divide the result by 5.
    Add 32 to the result.

Examples:
celciusToFahrenheit(20) 	-> 68
celciusToFahrenheit(25) 	-> 77
celciusToFahrenheit(0) 	    -> 32
celciusToFahrenheit(-10) 	-> 14 
 

*/  
 
function celciusToFarhrenheit(celsius) { 
    console.log((celsius * 9) / 5 + 32);
} 
    
celciusToFarhrenheit(20);
celciusToFarhrenheit(0); 
celciusToFarhrenheit(25); 
 
 
/* 
  
    task 3 
     
Write 2 functions named as rectangleArea() and rectanglePerimeter() which calculate the area and perimeter of a rectangle when invoked.

NOTE: Assume the sides of the rectangle are x and y.

Conversion Formula:
Area: x * y
Perimeter 2 * (x + y)

Examples:
rectangleArea(5, 4) 	-> 20
rectangleArea(3, 7) 	-> 21
rectangleArea(6, 10) 	-> 60

rectanglePerimeter(5, 4) 		-> 18
rectanglePerimeter(3, 7) 		-> 20
rectanglePerimeter(6, 10) 	    -> 32 

*/  
 
function rectangleArea(x, y) { 
     
    console.log( x * y); 

} 
 
function rectanglePerimeter(x, y) {    

    console.log( 2 * (x + y)); 

}  
 
rectangleArea(5, 4)	;
rectangleArea(3, 7);
rectangleArea(6, 10);
 
rectanglePerimeter(5, 4);
rectanglePerimeter(3, 7);
rectanglePerimeter(6, 10); 
 
 
/*   

    Task 4 
     
    Write 2 functions named as squareArea() and squarePerimeter() which calculate the area and perimeter of a square when invoked.

NOTE: Assume the side of the square is x.

Conversion Formula:
Area: x * x
Perimeter 4 * x

Examples:
squareArea(5) 	-> 25
squareArea(3) 	-> 9
squareArea(6) 	-> 36

squarePerimeter(5) 	-> 20
squarePerimeter(3) 	-> 12
squarePerimeter(6) 	-> 24
 
*/  
 
function squareArea(x) { 
     
    console.log( x * x); 

} 
 
function squarePerimeter(x) {    

    console.log( 4 * x); 

}   
 
squareArea(5);
squareArea(3);
squareArea(6); 
 
squarePerimeter(5);
squarePerimeter(3);
squarePerimeter(6);
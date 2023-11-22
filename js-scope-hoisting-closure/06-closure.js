

function score() {
    let yourScore = 0;

    function inner (isWin) {
        if(isWin) yourScore += 1; 
        return yourScore;


    }
    return inner;
}

const myVar = score(true); // it starts the variable yourScore with zero and returns the inner function 

console.log(myVar());



/* 
Closure is about having information to be private and cannot be modified outside the function directly
-But, you want to provide a different access to modify it with an inner method
-your outer method returns the inner method
-then, you can modify the CLOSED private variable thru the inner method returned by outer method


yourScore is initilized with the value 0
inner function created which increases the score by one or not
inner function is returned
*/



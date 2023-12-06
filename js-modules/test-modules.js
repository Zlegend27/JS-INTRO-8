const {getRandomNumber, average} = require('./mathUtils');


/* 
Generate 2 random numbers bt 1 and 10 both inclusive.
find their average
*/

const r1 = getRandomNumber(1, 10);
const r2 = getRandomNumber(1, 10);

console.log((r1 + r2) / 2);


average(20, 10);
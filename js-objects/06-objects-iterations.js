const car = {
    color: 'red',
    year: 2023,
    make: 'BMW',
    model: 'X7'
};



for(const key of Object.keys(car)) {
    console.log(key);
} 


Object.keys(car).forEach(key => console.log(key)); 




for(const value of Object.values(car)) {
    console.log(value);
}

Object.values(car).forEach(value => console.log(value));

for(let i = 0; i <= Object.values(car).length-1; i++) {
    console.log(Object.values(car)[i]);
} 


console.log(Object.entries(car)); 

for(const entry of Object.entries(car)) {
    console.log(entry)
}

Object.entries(car).forEach(entry => console.log(entry));

// How to fetch all the keys and values seprately not as a pair array
for(const [x, y] of Object.entries(car)) {
    console.log(x, y);
}

// Object.entries(car).forEach( (key, value) => console.log(key, value)); 



// Check if any value in the car object is 'red'
// check if any key in the car object is 'engine'

console.log(Object.values(car).includes('red'));
console.log(Object.keys(car).indexOf('engine') >= 0);
const student = {
    fullName: 'John Doe', 
    age: 18,
    course: 'Software Engineering'
};

// keys: fullName, age, course
// Values: John Doe, 18, Software Engineering
// Key-value pairs: 
 

// How to get all the keys of an object as an array?
console.log(Object.keys(student)); 

// How to get all the values of an object as an array?
console.log(Object.values(student));

// How to get all the key-value pairs of an object as an aray?
console.log(Object.entries(student)); 



const country = {
    name: 'Germany',
    capital: 'Berlin',
    population: 83000000
};

console.log(Object.keys(country));
console.log(Object.values(country));
console.log(Object.entries(country));
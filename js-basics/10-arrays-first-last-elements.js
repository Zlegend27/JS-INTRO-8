const a = [ 'Mouse', 'Laptop', 'Computer', 'Phone', 'Camera' ];
  
// first 
console.log(a[0]); 
 
// last 
console.log(a[a.length-1]); 
 
// we create an object with key-value pairs known as properties
const car = { 
    color: 'Black',
    year: 2020, 
    make: 'Toyota',
    model: 'Camry',
    price: 20000
}; 
 
// How to output an object 
console.log(car); 
 
// How to access a specific information about the object like model
// car.model or car['model'];  
console.log(car.model);
console.log(car['model']); 
 
// How to update an existing value like price and color 
// car.model = newValue or car['model'] = newValue 
car.color = 'Orange';
car['price'] = 22000
 
console.log(car); 
 
// adding additional information - like miles = 33000 and trim = sudan
// car.trim = 'SEDAN' or car{'mileage'} = newValue
car.trim = 'SEDAN'; 
car.mileage = 33000; 
 
console.log(car); 
 
// how to remove a property or key-value from an object 
delete car.price; 
delete car.mileage; 
 
console.log(car);
/*
create a constructor called Car 
and define 4 properties
year, 
make,
model,
price

create and add 2 prototype functions to the Car prototype
drive -> {year make model} drives.
stop -> {year make model} stops.

create 3 car objects with below info
car1 -> 2023 Tesla X 80000
car2 -> 2022 BMW X7 60000
car3 -> 2020 Tesla Y 27000

log each car info to the console
Execute drive and stop functions for each car 

get each cars price information in the format -> {year make model} is ${price}
*/


// BEFORE ES6 *************************
function Car(year, make, model, price) {
    this.year = year;
    this.make = make;
    this.model = model;
    this.price = price;
}

Car.prototype.drive = function () {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
};

Car.prototype.stop = function () {
    console.log(`${this.year} ${this.make} ${this.model} stops.`);
};


const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);


const allcars = [car1, car2, car3];

allcars.forEach(car => {
    console.log(car);
    car.drive();
    car.stop();
    console.log(`${car.year} ${car.make} ${car.model} is $${car.price}`);
    console.log('\n----------- Next Car -------------\n');
});


// AFTER ES6
class Car {
    constructor(year, make, model, price) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }
}

// creating prototype after ES6
drive() {
    console.log(`${this.year} ${this.make} ${this.model} drives.`);
}

// Creating objects from car class using its constructor
const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);


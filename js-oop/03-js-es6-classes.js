class Car {
    constructor(year, make, model, price) {
        this.year = year;
        this.make = make;
        this.model = model;
        this.price = price;
    }
    drive() {
        console.log(`${this.year} ${this.make} ${this.model} drives.`);
    }
    stop() {
        console.log(`${this.year} ${this.make} ${this.model} stops.`);
    }
}

const car1 = new Car(2023, 'Tesla', 'X', 80000);
const car2 = new Car(2022, 'BMW', 'X7', 60000);
const car3 = new Car(2020, 'Tesla', 'Y', 27000);

car1.drive();
car2.stop();

console.log(car3.price);
console.log(car3.model);
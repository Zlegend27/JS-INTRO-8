class Table {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
}


const table1 = new Table('Office', 'Wood', 200);
 
// Accessing and updating table inforation without getters and setters
console.log(table1.type);
console.log(table1.material);
console.log(table1.price);

table1.price = 300;
console.log(table1.price);

class Chair {
    constructor(type, material, price) {
        this.type = type;
        this.material = material;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        if(price <= 0) throw new Error('PRICE CANNOT BE ZERO OR LESS');
        else this.price = price;
    }
}

const chair1 = new Chair('Office', 'Wood', 250);


console.log(chair1.type);
console.log(chair1.material);

console.log(chair1.getPrice());

chair1.setPrice(300);
console.log(chair1.getPrice());

// Private Fields 
class Phone {
    #brand = 'iPhone';
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        if(price <= 0) throw new Error('Price cannot be zero or less');
        else this.price = price;
    }
    getBrand() {
        return this.#brand;
    }
    setBrand() {
        this.#brand = brand;
    }

}


const iPhone15 = new iPhone('15', 1000);
// console.log(iPhone15.#brand); 
console.log(iPhone15.getBrand());

iPhone15.setBrand('Samsung');
class Phone {
    constructor(brand, price) {
        this.brand = brand;
        this.price = price;
    }
    call() {
        console.log('CALL');
    }

    getPrice() {
        return this.price;
    }

    setPrice(newPrice) {
        this.price = newPrice;
    }
}

const phone1 = new Phone('iPhone', 1000);
const phone2 = new Phone('Samsung', 800);

// phone2.price = 900; // setting the price of phone 2
phone2.setPrice(900);

// Getting the prices of phone objects
// console.log(phone1.price); // 1000
// console.log(phone2.price); // 800
console.log(phone1.getPrice()); // 1000
console.log(phone2.getPrice()); // 900

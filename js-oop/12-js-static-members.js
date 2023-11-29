// static properties and functions 
// static properties and functions are accessed with class names
// They do not belong to object

// All the math functions that we used were static methods
console.log(Math.max(3, 5));

Math.max();
Math.random();

// Static property
console.log(Math.PI); // 3.141592653589793...
console.log(Number.MAX_SAFE_INTEGER);

class Computer {
    // non-static - belongs to object
    brand = 'Apple';

    // non-static - belongs to object
    run() {
        console.log('RUN FUNCTION');
    }

    // static - belong to class
    static info = 'SECRET INFO';

    static open() {
        console.log('OPEN FUNCTION');
    }
}

const c1 = new Computer();
console.log(c1.brand);
c1.run();

Computer.open();

console.log(c1.info);
console.log(Computer.info);

class Person {
    constructor(name, address, gender) { // these are information vary from person to person objects
        this.name = name;
        this.address = address;
        this.gender = gender;
    }
    static hasEyes = true; // This is universal info for all the people, so makes sense to make static

    walk() {
        console.log('Non-Static Walk Function');
    }

    static breathe() {
        console.log('STATIC BREATHE FUNCTION');
    }
}

const ayca = new Person('Ayca', 'AL', 'Female');
const suzanne = new Person('Suzanne', 'IL', 'Female');
const dylan = new Person('Dylan', 'IO', 'Male');

console.log(ayca.name); 
ayca.walk();
suzanne.walk();
Person.breathe();

Person.hasEyes;
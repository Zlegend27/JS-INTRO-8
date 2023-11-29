// ES6 Inheritance


// Parent class
class Person {
    constructor(fullname, age) {
        this.fullname = fullname;
        this.age = age;
    }

    eat() {
        console.log('EAT')
    }
    sleep() {
        console.log('SLEEP')
    }
    walk() {
        console.log('WALK')
    }
}

// Inherit all the person properties and functions to Singer
class Singer extends Person {
    constructor(fullname, age, groupName) {
        super(fullname, age); // Invoking parent constructor to assign fullname and age
        this.groupName = groupName;
    }

    sing() {
        console.log('SING');
    }
}

// Inherit all the person properties and functions to Prgrammer
class Programmer extends Person {
    constructor(fullname, age, companyName) {
        super(fullname, age);
        this.companyName = companyName;
    }

    code() {
        console.log('CODE');
    }
}

const person1 = new Person('John Doe', 25);
const singer1 = new Singer('Jane Doe', 20, 'Pink');
const programmer1 = new Programmer('Alex Smith', 30, 'Apple');

person1.eat(); // EAT
singer1.eat(); // EAT 
programmer1.eat(); // EAT

person1.walk();
singer1.walk();
programmer1.walk();

person1.sleep();
singer1.sleep();
programmer1.sleep();

singer1.sing();

programmer1.code();

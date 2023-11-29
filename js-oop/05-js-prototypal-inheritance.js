// Prototypal Inheritance before ES6

// Person Object with 3 functions

const person = {
    eat: function() {
        console.log('EAT');
    },
    sleep: function() {
        console.log('SLEEP');
    },
    walk: function() {
        console.log('WALK');
    }
}


// Programmer object with 4 functions

const programmer = {
    _proto_: person,
    code: function() {
        console.log('CODE');
    }
};

// Singer Object with 4 functions sing

const singer = {
    _proto_: person,
    sing: function() {
        console.log('SINGING');
    }
};

singer.sing();
singer.walk();
singer.eat();


// Prototype Chaining
console.log(singer._proto_);//
console.log(singer._proto_._proto_);//
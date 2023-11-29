/*
Create a prototype called as Animal which takes 'name', 'age', 'color'
Create 2 prototype functions eat(), run()
*/
function Animal(name, age, color) {
    this.name = name;
    this.age = age;
    this.color = color;
}


Animal.prototype.eat = function () {
    console.log('EAT FUNCTION');
}

Animal.prototype.run = function () {
    console.log('RUN FUNCTION');
}

const a1 = new Animal('Tiger', 3, 'orange');
const a2 = new Animal('Sky', 1, 'white');

console.log(a1);
console.log(a1.name);
console.log(a2.color);


/*
Create a prototype called as Cat and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function play()
*/
function Cat(name, age, color, breed) {
    Animal.call(this, name, age, color);
    this.breed = breed;
}

Cat.prototype.play = function () {
    console.log('PLAY FUNCTION');
}

/*
Create a prototype called as Dog and inherit all the Animal prototype properties and methods which takes 'name', 'age', 'color', 'breed'
Create 1 prototype function catch()
*/


/*
Create a prototype called as Husky and inherit all the Dog prototype properties and methods which takes 'name', 'age', 'color', 'breed', 'shed'
Create 1 prototype function protect()
*/
/*
create a class called cat

create a constructor which takes below information and defines template to create many objects from the class
name, color, age
Create 2 functions as below
makesSound -> 'Meow'
eat() -> 'numnum'
sleep() -> 'sleep'

class = blueprint or template
Class is a blueprint from where many objects can be instantiated

object = instances
Objects are the instances of a class

*/

class Cat {
    constructor(name, color, age) {
        this.name = name;
        this.color = color;
        this.age = age;
    }
    makesSound() {
        console.log('Meow');
    }
    eat() {
        console.log('numnumnum');
    }
    sleep() {
        console.log('sleep');
    }
}

// Creating objects from the Cat class

const cat1 = new Cat('whiskers', 'orange', 3);
const cat2 = new Cat('timmothy', 'black', 2);
const cat3 = new Cat('dung beatle', 'white', .5);

const cats = [cat1, cat2, cat3];

cats.forEach(cat => {
    cat.eat();
    cat.makesSound();
    cat.sleep();
    console.log(cat);
    console.log('\n----------- Next Cat -------------\n');
});


// Store all the cat names in an array 

console.log(cats.map(cat => cat.name));

// Store all the cats name that are older than 1 year

console.log(cats.filter(cat => cat.age > 1).map(cat => cat.name));

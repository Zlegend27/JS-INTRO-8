/*
create an object called as student 1 with the below information

student 1
fName: 'John'
lName: 'Doe',
age: 25

student 2
fName: 'Jane'
lName: 'Doe',
age: 23

student 3
fName: 'Alex'
lName: 'Smith',
age: 30

student 4
fName: 'Morgan'
lName: 'Smith',
age: 19

*/


// not efficient
/*
const student1 = {
    fName: 'John',
    lName: 'Doe',
    age: 25
};

const student2 = {
    fName: 'Jane',
    lName: 'Doe',
    age: 23
};

const student3 = {
    fName: 'Alex',
    lName: 'Smith',
    age: 30
};

const student4 = {
    fName: 'Morgan',
    lName: 'Doe',
    age: 19
};

*/

// Create a template and use it to create many objects

// Constructor is a special function that allows you to create many similar objects

function Student(fName, lName, age) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

// adding a function to your prototype
Student.prototype.study = function () {
    console.log(`${this.fName} ${this.lName} studies.`);
}

// Create and add a new prototype function called getAge --> logs {fullname}'s age is{age};
// Test is with student 2 and student 4

Student.prototype.getAge = function () {
    console.log(`${this.fName} ${this.lName}'s age is ${this.age}`);
}


const student1 = new Student('John', 'Doe', 25);
const student2 = new Student('Jane', 'Doe', 23);
const student3 = new Student('Alex', 'Smith', 30);
const student4 = new Student('Morgan', 'Smith', 19);

console.log(student3);
console.log(student4.lName);

student3.study();
student2.getAge();
student4.getAge();

// constructor - prototype/blueprint
function Teacher(fName, lName, age, field) {
    this.fName = fName;
    this.lName = lName;
    this.age = age;
    this.field = field;
}

const teacher1 = new Teacher('David', 'Doe', 98, 'Scuba Instructor');
const teacher2 = new Teacher('Arnold', 'schwarzenegger', 76, 'Gym');
const teacher3 = new Teacher('Bowser', 'Junior', 13, 'Art');

console.log(teacher1);
console.log(teacher2);
console.log(teacher3);

Teacher.prototype.teach = function () {
    console.log(`${this.fName} teaches.`);
}

Teacher.prototype.givesHomework = function () {
    console.log(`${this.fName} gives Homework.`);
}

teacher1.teach();
teacher2.givesHomework();

const teachers = [teacher1, teacher2, teacher3];
const students = [student1, student2, student3, student4];

const oldestTeacher = teachers.reduce((oldest, curr) => {
    if(oldest.age > curr.age) return oldest;
    return curr;
}, {})
console.log(oldestTeacher);


const youngestStudent = students.reduce((young, curr) => young.age < curr.age ? young : curr, {});
console.log(youngestStudent.fName); // Morgan

console.log(students.filter(student => student.lName === 'Smith').length);
console.log(students.reduce((counter, curr) => curr.lName === 'Smith' ? counter + 1 : counter, 0));


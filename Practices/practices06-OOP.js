// 1. Create a class called as Student

class Student {
    static numberOfStudents = 0;
    // 2. Create a constructor with these properties -> fname, lname, age, gender, className

    constructor(fname, lname, age, gender, className) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
        this.gender = gender;
        this.className = className;
        Student.numberOfStudents++;
    }
}

// 3. Create a class called MathStudent and inherit from Student

class MathStudent extends Student {
    static numberOfMathStudents = 0;
    // 4. Create a 5 args constructor that chains super class constructor
    constructor(fname, lname, age, gender, className) {
        super(fname, lname, age, gender, className);
        MathStudent.numberOfMathStudents++;
    }
}

// 5. Create a class called ScienceStudent and inherit from student
// 6. Create a 5 args constructor that chains super class constructor

class ScienceStudent extends Student {
    static numberOfScienceStudent = 0;
    constructor(fname, lname, age, gender, className) {
        super(fname, lname, age, gender, className);
        ScienceStudent.numberOfScienceStudent++;
    }
}

// Create Student object, MathStudent object or ScienceStudent object
/*
7. Create below Student objects
MathStudent object -> John-Doe-23-M-Math
MathStudent object -> Alex-Smith-30-M-Math
MathStudent object -> Jane-Doe-17-F-Math
ScienceStudent object -> James-Morgan-21-M-Science
*/

console.log(Student.numberOfStudents); // 0
console.log(MathStudent.numberOfMathStudents); // 0
console.log(ScienceStudent.numberOfScienceStudent); // 0


const student1 = new MathStudent('John', 'Doe', 23, 'M', 'Math');
const student2 = new MathStudent('Alex', 'Smith', 30, 'M', 'Math');
const student3 = new MathStudent('Jane', 'Doe', 17, 'F', 'Math');
const student4 = new ScienceStudent('James', 'Morgan', 21, 'M', 'Science');

console.log(Student.numberOfStudents); // 4
console.log(MathStudent.numberOfMathStudents); // 3
console.log(ScienceStudent.numberOfScienceStudent); // 1

// 8. Print information of each student

const students = [ student1, student2, student3, student4 ];

// for(const student of students) {
//     console.log(student);
// }

students.forEach(x => console.log(x));

/*
Find how many students are male                             -> 3
Find how many students are female                           -> 1
Find how many students are taking the Math                  -> 3
Find how many students are taking the Science               -> 1
Find the oldest student                                     -> Alex Smith is oldest with the age of 30.
Find the youngest student                                   -> Jane Doe is youngest with the age of 17. reduce 
Find the average age of the students                        -> 91/4                                     reduce
Find and return the fullname of students who take Math      -> ['John Doe', 'Alex Smith', 'Jane Doe']   filter and map 
Find and return the fname of students who are male          -> ['John', 'Alex', 'James']                filter and map
Find and return the lname of students who are older than 20 -> ['Doe', 'Smith' 'Morgan']                filter and map
*/

console.log('\n---------------------------\n');

console.log(students.filter(student => student.gender === 'M').length);

console.log(students.reduce((count, student) => {
    if(student.gender === 'M') return count + 1;
    else return count;
}, 0));

console.log('\n---------------------------\n');


let oldest = students[0];

for(const student of students) {
    if(students.age > oldest.age) oldest = student;
}

console.log(oldest.age);

const oldestWithReduce = students.reduce((oldest, student) => oldest.age ? oldest : student , students[0]);

console.log(oldestWithReduce);

console.log('\n---------------------------\n');

let youngest = students[0];

for(const student of students) {
    if(student.age < youngest.age) youngest = student;
}

console.log(`${youngest.fname} ${youngest.lname} is the youngest with the age of ${youngest.age}`);

console.log('\n---------------------------\n');
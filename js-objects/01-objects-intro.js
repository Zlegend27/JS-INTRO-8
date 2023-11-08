const course = {
    batch: 8, 
    numberOfStudents: 7,
    courseName: 'Software Engineer in Test'
};

// Keys -> batch, numberOfStudents, courseName
// values -> 8, 7, Software Engineer in Test
// key-value pairs -> batch, 8


// How to get all object info?
console.log(course);


// How to get a specific info?
console.log(course.courseName);
console.log(course['courseName']);


// How to update a property?
course.numberOfStudents = 15;
console.log(course.numberOfStudents); // 15 

course['numberOfStudents'] = 10;
console.log(course.numberOfStudents);


// How add a new property?
course.address = 'Chicago';
course['startDate'] = '01/22/2024';

console.log(course);


// How to delte a property?
delete course.numberOfStudents;
delete course['address'];

console.log(course);

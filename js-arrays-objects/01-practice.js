/*
Create a student object with below info
firstName : Alex
lastName : Smith
hobbies : Soccer - Watching movies
exam_scores : midterm = 60 and final = 90

Output your object to the console
*/

const student = {
    firstName: 'Alex',
    lastName: 'Smith',
    hobbies: ['Soccer', 'Watching movies'],
    exam_scores: {
        midterm: 60,
        final: 90,
    }
};

console.log(student);

/*
Print hobbies -> [ 'Soccer', 'Watching Movies' ]
Print exam_scores -> { midterm: 60, final: 90 }
Print Soccer -> Soccer
*/

console.log(Object.values(student.hobbies));

/*
Find and print average of exam scores -> 75
*/

let average = (student.exam_scores.midterm + student.exam_scores.final) / 2;

console.log(average);

const exam_results = Object.values(student.exam_scores);

let sum = 0;

for (const scores of exam_results) {
    sum += scores;
}

console.log(sum / exam_results.length);

/*
Create a book object
name is Amok
author's first name is Stefan
author's last name is Zweig
genre is Novella
*/


/*
Create an array of books that stores 3 books information
Stefan Zweig - Amok - Novella
Orhan Pamuk - My Name Is Red - Historical Novel
George Orwell - 1984 - Dystopian Literature
*/


const books = [
    {
        name: 'Amok',
        author: {
            first_name: 'Stefan',
            last_name: 'Zweig'
        },
        genre: 'Novella'
    },
    {
        name: 'My Name is Red',
        author: {
            first_name: 'Orhan',
            last_name: 'Pamuk'
        },
        genre: 'Historical Novel'
    },
    {
        name: '1984',
        author: {
            first_name: 'George',
            last_name: 'Orwell'
        },
        genre: 'Dystopian Literature'
    }

];


// Count the books where Author first name has an 'a' -> 2

let sum1 = 0;


for(const book of books) {
    
    if(book.author.first_name.includes('a' || 'A')) sum1 ++;
}

console.log(sum1); 




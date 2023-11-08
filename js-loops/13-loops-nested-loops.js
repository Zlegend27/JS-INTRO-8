for(let i = 1; i <= 3; i++) {
    console.log(i);

    for(let j = 1; j <= 5; j++) {
        console.log('\t' + j);
    }
}

const studentsGroups = [
    ['Alex', 'Max', 'Jane'],
    ['John', 'James'],
    ['Ryan', 'Tom']
];

// nested for loop
for(let i = 0; i <= studentsGroups.length-1; i++) {
    console.log(studentsGroups[i]);

    for(let j = 0; j <= studentsGroups[i].length-1; j++) {
        console.log(studentsGroups[i][j]);
    }
}

// nested for...of
for(const group of studentsGroups) {
    console.log(group);

    for(const student of group) {
        console.log(student);
    }
}
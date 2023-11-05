const names = ['John', 'Jane', 'Alex', 'Max']; 
 
// Ouput all these names to console - seperate lines
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]); 
 
for(let i = 0; i <= names.length-1; i++) {
    console.log(names[i]);
}

let name = 'Suzanne';
 
for(let i = 0; i <= name.length-1; i++) {
    console.log(name[i]);
}

// It is preferred to use for...of loop instead of for loop
// John is a name of names
// Jane is a name of names
// Alex is a name of names
// Max is a name of names

for(const x of names) {
    console.log(x.length);
} 
 
for(const upah of names) {
    console.log(upah.toUpperCase());
} 


// count how many names starts with J   --> 2 

let countJ = 0; 
 
for(const j of names) {
    if(j[0] === 'J') console.log(countJ++);
} 
console.log(countJ);
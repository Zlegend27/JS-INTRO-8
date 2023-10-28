// Trimming 
 
let school = '    TechGlobal School    '; 
 
let schoolStartTrimmed = school.trimStart(); 
console.log(schoolStartTrimmed);
console.log(schoolStartTrimmed.length); // 21 
 
 
let schoolEndTrimmed = school.trimEnd(); 
console.log(schoolEndTrimmed); // '    TechGlobal School'
console.log(schoolEndTrimmed.length); 
 
let schoolTrimmed = school.trim(); 
console.log(schoolTrimmed); // 'TechGlobal School'
console.log(schoolTrimmed.length); // 17 
 
// trim functions cannot be used to remove extra white spaces in the middle of the string 
 
console.log('      abc      '.trim()); // 'abc'
console.log('      abc      '.trim().length); // 3 
 
console.log('Hello          World'.trim()); // Hello          World
console.log('Hello          World'.trim().length); // 20 
 
 
console.log('      '.trimStart().length); // 0

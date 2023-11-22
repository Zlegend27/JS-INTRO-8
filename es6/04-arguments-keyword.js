// This is not an ES6 feature

function combineStrings(str1, str2) {
    if(typeof str1 === 'string' && typeof str2 === 'string') console.log(str1 + str2);
    else console.error('The argument is not a string!')
}

combineStrings('Java', 'Script'); // JavaScript
combineStrings('Java');
combineStrings();


function combineStrings(str1, str2) {
    if(arguments[0] !== undefined && arguments[1] !== undefined) console.log(arguments[0] + arguments[1]);
    else console.error('The argument is not a string');
}

combineStrings('Java', 'Script'); // JavaScript
combineStrings('Java');
combineStrings();


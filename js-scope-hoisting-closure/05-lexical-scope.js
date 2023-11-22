// Lexical scope is introduced with ES6 
// We can discuss lexical scope in case of having nested functions only


function a() {
    let name = 'John';

    function b() {
        let age = 45;

        console.log(age); // 45
        console.log(name); // 'John'
    }
}

console.log(name); // error
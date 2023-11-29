/*


Login function
1. enter your username and password and click login button
2. validation will happen 
3. login


*/

function enterCreds() {
    console.log('Credentials entered!');
}

function validateCreds(callbackfn) {
    setTimeout(() => {
        console.log('Credentials are validated!');
        callbackfn();
    }, 5000);
}

function login() {
    console.log('You are logged in!');
}

// Hard pause
setTimeout(() => {
    login();
}, 5000);

let products;

// fetch('www.amazon.com'); // 10 seconds

console.log(products.length);

enterCreds();
validateCreds(); // happens in 5 seconds
// Syntax of Promise

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Fullfilled!');
        reject('Error');
    }, 5000);
});


setTimeout(() => {
    console.log(myPromise); // Promise { 'Fullfilled!' }
}, 5000);


const promiseAge = new Promise((resolve, reject) => {
    const age = Math.floor(Math.random() * 30);
    console.log(`Age is = ${age}.`);
    if (age >= 16) {
        resolve('Success');
    }
    else reject('Failure');
});


promiseAge.then(() => {
    // Success body

}).catch(() => {
    // fail body
})


console.log(promiseAge);

// Returning promises in a function 

function testAge() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const age = Math.floor(Math.random() * 30);
            console.log(`Age is = ${age}.`);
            if (age >= 16) {
                resolve();
            }
            else reject();
        }, 5000);
    });
}

testAge().then(() => {
    // success code
    console.log('You win');
}).catch(() => {
    console.log('Error');
});


// A login promise
function login(username, password) {
    return new Promise((resolve, reject) => {
        if(username === 'TechGlobal') {
            // check password
            if(password === 'Test1234') resolve();
            else reject('invalid-password');
        }
        else reject('invalid-username');
    });
}

login('TechGlobal', 'Test1234').then(() => {
    console.log('You are logged in');
}).catch((err) => {
    if(err === 'invalid-username') console.log('Invalid Username entered');
    else console.log('Inalid Password Entered');
});
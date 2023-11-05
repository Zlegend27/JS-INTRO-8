let i = 1;

while (i <= 3) {
    console.log('While loop | Hello World!');
    i++;
}


let j = 1;
do {
    console.log('Do-While loop | Hello World!');
    j++;
} while (j <= 3);

// No execution 
for (let i = 1; i < 0; i++) {
    console.log('I am Executeing');
}

let num = 1;

while (num < 0) {
    console.log('I am Executeing');
    num++;
}

// yes execution 
let n = 1;

do {
    console.log('I am Executeing');
    n++;
} while (n < 0);

let pin = 1234;
let attempt = 0;
let randomPin;

do {
    randomPin = Math.floor(Math.random() * 9000) + 1000;
    if (pin === randomPin) {
        console.log('You are in!');
    }
    else {
        attempt++;
        if (attempt === 10) {
            console.log('You already attempted 10 times!')
            console.log('You are locked for 10 min');
            break;
        }
    }
} while (pin !== randomPin)

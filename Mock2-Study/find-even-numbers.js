// https://cdn.discordapp.com/attachments/1172342573889769560/1186148355827576892/Screenshot_2023-12-17_212959.png?ex=659231bd&is=657fbcbd&hm=759281e6093ab9bf31c095ecb977c2eb88247cdc04215ea0c05c28579fc6b645&


function getEvens(num1, num2) {
    let small = Math.min(num1, num2);
    let big = Math.max(num1, num2);
    const arr = [];

    for(i = small; i <= big; i++) {
        if(i % 2 === 0) arr.push(i);
    }

    return arr;
}

console.log(getEvens(2, 7));
console.log(getEvens(17, 5));
console.log(getEvens(4, 4));
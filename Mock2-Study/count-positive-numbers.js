// https://cdn.discordapp.com/attachments/1172342573889769560/1186148556516642866/Screenshot_2023-12-17_213041.png?ex=659231ed&is=657fbced&hm=94123d975218766d350e5de1405109ab9924d142b45616c90d498d45b8fe23e0&


const countPos = (arr) => {
    const pos = arr.filter(x => x > 0).length;

    return pos;
}

console.log(countPos([-45, 0, 0, 34, 5, 67]));
console.log(countPos([-23, -4, 0, 5, 90, 123]));
console.log(countPos([0, -1, -2, -3]));
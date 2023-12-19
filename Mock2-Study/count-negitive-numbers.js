// https://cdn.discordapp.com/attachments/1172342573889769560/1186145879627939970/Screenshot_2023-12-17_212009.png?ex=65922f6f&is=657fba6f&hm=476d9d7ef4acf44713063ec8d07d954c7eb107004fbfa41cb6de7fad620785b2&

const countNeg = (arr) => {
    const neg = arr.filter( x => x < 0).length;

    return neg;
}

console.log(countNeg([-45, 0, 0, 34, 5, 67]));
console.log(countNeg([-23, -4, 0, 5, 90, 123]));
console.log(countNeg([0, -1, -2, -3]));
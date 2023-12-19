// https://cdn.discordapp.com/attachments/1172342573889769560/1186146590059151441/Screenshot_2023-12-17_212258.png?ex=65923018&is=657fbb18&hm=8c8fcbd2d3b2698bf40ed1f7c00846db01d7fbbabb4e55d4399907474364c9f2&

const countWords = (str) => {
    const words = str.trim().split(' ').length;

    return words;

}

console.log(countWords('      JavaScript is fun     '));
console.log(countWords('Cypress is an UI automation tool.   '));
console.log(countWords(' 1 2 3 4 '));
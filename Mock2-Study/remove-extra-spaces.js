// https://cdn.discordapp.com/attachments/1172342573889769560/1186146294134222960/Screenshot_2023-12-17_212147.png?ex=65922fd2&is=657fbad2&hm=8bcc6770af1528cbc6332da8e7878a86eb94648fcfdfdff12d63e4675070b567&


const removeExtraSpaces = (str) => {
    const trim = str.trim().split(' ');
    trimDone = trim.filter(x => x !== ' ').join(' ');

    return trimDone;
}

console.log(removeExtraSpaces('Hello'));
console.log(removeExtraSpaces('              Hello    World    '));
console.log(removeExtraSpaces('  JavaScript  is      fun'));
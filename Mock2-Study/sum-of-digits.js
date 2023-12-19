// https://cdn.discordapp.com/attachments/1172342573889769560/1186145237853278358/Screenshot_2023-12-17_211735.png?ex=65922ed6&is=657fb9d6&hm=7fcf9286bab1e7f1a67a41bace00d41675c45a579cf046059921eacfe4f86039&

const sumOfDigits = (str) => {
    let sum = 0;
    for(const i of str) {
        if('1234567890'.includes(i)) {
            sum += parseInt(i);
        }
        else sum;
    }
    return sum;
}

console.log(sumOfDigits("JavaScipt"));
console.log(sumOfDigits("Joh'ns age is 29"));
console.log(sumOfDigits("$125.0"));
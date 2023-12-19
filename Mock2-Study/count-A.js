// https://cdn.discordapp.com/attachments/1172342573889769560/1186145356174589982/Screenshot_2023-12-17_211803.png?ex=65922ef2&is=657fb9f2&hm=c20681f338b13e768c95ea1b2169cd4e038d39059190b828f4d3ea29610503d5&


function countA(str) {
    let aCounter = 0;

    for(const a of str) {
        if('aA'.includes(a)) {
            aCounter ++;
        }
        else aCounter;
    }
    return aCounter;
}

console.log(countA('TechGlobal is a QA bootcamp'));
console.log(countA('QA stands for Quality Assurance'));
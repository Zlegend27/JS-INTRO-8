// https://cdn.discordapp.com/attachments/1172342573889769560/1186147441792262154/Screenshot_2023-12-17_212616.png?ex=659230e3&is=657fbbe3&hm=3350a027aabb3eaf350393a4420dc527152a1f6ddf890d66df795e0c39a6b39c&


const noVowel = (str) => {
    let string = '';
    for(const constonant of str) {
        if('aeiou'.includes(constonant.toLowerCase())) string;
        else string += constonant;
    }
    return string;
}

console.log(noVowel('TechGlobal'));
console.log(noVowel('AEOxyz'));
console.log(noVowel('JavaScript'));
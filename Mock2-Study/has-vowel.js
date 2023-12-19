// https://cdn.discordapp.com/attachments/1172342573889769560/1186145610060025956/Screenshot_2023-12-17_211900.png?ex=65922f2e&is=657fba2e&hm=cf4b0d9fc6428e64d9d2f86534741e2b37e6b158fbac3252b9612d5c2b1f90bb&


const hasVowel = (str) => {
    let res = false;
    for (let i = 0; i < str.length; i++) {
      // console.log(str[i], "this is I");
      if ("aeuio".includes(str[i])) res = true;
    }
  
    return res;
  };

console.log(hasVowel(''));
console.log(hasVowel('JavaScript'));
console.log(hasVowel('Tech Global'));
console.log(hasVowel('1234'));
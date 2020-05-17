// Letter Changes ## coderbyte.com

// Examples
// Input: "hello*3"
// Output: Ifmmp*3
// Input: "fun times!"
// Output: gvO Ujnft!

function LetterChanges(str) { 

    // code goes here  
    const rexgexStr = /[a-z]/gi;
    const regexVowel = /[aeiou]/gi;
  
    let convertStr = str.replace(rexgexStr,((char) => char === /[Zz]/ 
    ? 'a' : String.fromCharCode(char.charCodeAt() + 1)));
  
    convertStr = convertStr.replace(regexVowel,(vowel) => vowel
    .toUpperCase());
  
    return convertStr; 
  
  }
     
  // keep this function call here 
//   console.log(LetterChanges(readline()));
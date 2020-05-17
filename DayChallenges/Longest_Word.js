// Longest Word ## coderbyte.com

// 1. For input "hello world" =====================>> The correct output is hello
// 2. For input "this is some sort of sentence" ===>> The correct output is sentence
// 3. For input "longest word!!" ==================>> The correct output is longest
// 4. For input "coderbyte" =======================>> The correct output is coderbyte
// 5. For input "oxford press" ====================>> The correct output is oxford
// 6. For input "123456789 98765432" ==============>> The correct output is 123456789
// 7. For input "letter after letter!!" ===========>> The correct output is letter
// 8. For input "a b c dee" =======================>> The correct output is dee

function LongestWord(sen) { 

    // code goes here  
    const [firstLongSort, ...arr] = sen.split(' ')  
    .map(a => a.replace(/\W/g,''))
    .sort((a,b) => (b.length - a.length));
  
    return firstLongSort; 
  
  }
     
  // keep this function call here 
//   console.log(LongestWord(readline()));
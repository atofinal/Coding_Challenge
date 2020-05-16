// Questions Marks

// Examples
// Input: "aa6?9"
// Output: false
// Input: "acc?7??sss?3rr1??????5"
// Output: true
// Input: "aaaaaaarrrrr??????"
// Output: false

// Input: "9???1???9??1???9"
// Output: false
// Input: "9???1???9???1???9"  O_o
// Output: true

// Input: "5??aaaaaaaaaaaaaaaaaaa?5?a??5"
// Output: true
// Input: "5??aaaaaaaaaaaaaaaaaaa?5?5"  o_O
// Output: false

// Input: "mbbv???????????4??????ddsdsdcc9?"
// Output: false

function QuestionsMarks(str) { 

    // code goes here

    // ### try first (wrong)============================================== 
    // function checkSum(s){
    //     const exactly = s.match(/(\d)(\?{3})(\d)/g)
    //     .map(v => v.match(/[^\?+]/g)
    //     .map(Number));    
    //     let arrSum = [].concat(...exactly).reduce((a,b) => a + b) ;
    //     return arrSum = arrSum === 10 ? true : false;
    //   }      
    // const filterNum = str.match(/(\d+|\?+)+[^A-Za-z]/g).join('');
    // const exactly = (/(\d)(\?{3})(\d)/g).test(filterNum) ? checkSum(filterNum) : false;
    // return exactly;
    //  ### try first ====================================================    

    // ## try again (Correct) *****
    const checkBool = [];  
    let x = str;
    x = x.match(/[^A-Za-z]/g).join('');
    const xLen = x.replace(/\?/g,'').length - 1;
    if (/\?+/g.test(x) === false)  {
      return false;
    }
    if (/\d+/g.test(x) === false)  {
      return false;
    }
  
    for (let i =0; i < xLen; i++){
        const mainSet = x.match(/\d\?+\d/).join('');
        const subSet = Number(mainSet.match(/^\d/).join('')) 
        + Number(mainSet.match(/\d$/).join('')) === 10;
        const lenMark = mainSet.match(/\?+/).join('') === '???';

        if (/\d\?{1,3}\d/.test(mainSet) === true) {
          if (subSet && lenMark) {
              checkBool.push(true);        
          } else {
              checkBool.push(false);          
          }        
        }
        x = x.replace(/^\?+/,'').replace(/^\d/,'');      
    }
    
    return checkBool.length > 0 ? checkBool.every(Boolean) : false;
       
}
     
  // keep this function call here 
//   console.log(QuestionsMarks(readline()));
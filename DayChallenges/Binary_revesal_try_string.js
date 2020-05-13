function BinaryReversal(str) { 

    // code goes here
    let numOrStr;
    if (isNaN(str)) {
      numOrStr = str.charCodeAt().toString(2);    
    } else {
      numOrStr = parseInt(str,10).toString(2);    
    }  
    console.log("numOrStr ",numOrStr) ;

    let repeatZeros = numOrStr.length + (8 - numOrStr.length % 8);    
    let byteString = numOrStr.length % 8 === 0 ? numOrStr : numOrStr.padStart(repeatZeros,'0');
    console.log("byteString ",byteString);

    let byteString_reverse = byteString
    .split('')
    .reverse()
    .join('');
    console.log("byteString_reverse ",byteString_reverse);

    return parseInt(byteString_reverse,2).toString(); 
  
  }
  
  // keep this function call here 
  console.log(BinaryReversal(readline()));
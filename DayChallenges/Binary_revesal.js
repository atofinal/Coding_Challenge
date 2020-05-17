// Binary Reversal ## coderbyte.com

// Examples
// Input: "213"
// Output: 171
// Input: "4567"
// Output: 60296

function BinaryReversal(str) { 

    // code goes here
    // ## first try
    let num = parseInt(str,10).toString(2);     
    console.log("num ",num);
    
    let repeatZeros = num.length + (8 - num.length % 8);    
    let byteString = num.length % 8 === 0 ? num : num.padStart(repeatZeros,'0');
    console.log("byteString ",byteString);

    // let byteString_2 = `${'0'.repeat(num.length % 8 === 0 ? 0 :  8 - num.length % 8)}${num}`;
    // console.log("byteString_2 ",byteString_2);
    // console.log(byteString === byteString_2 ? 'true' : 'false')

    let byteString_reverse = byteString
    .split('')
    .reverse()
    .join('');
    console.log("byteString_reverse ",byteString_reverse);
    
    return parseInt(byteString_reverse, 2).toString();     

  }

  // keep this function call here 
  BinaryReversal(4567)
  // console.log(BinaryReversal(readline()));
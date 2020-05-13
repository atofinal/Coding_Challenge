function BinaryReversal(str) { 

  // code goes here
  let num = parseInt(str,10).toString(2);
  
  let repeatZeros = num.length + (8 - num.length % 8);    
  let byteString = num.length % 8 === 0 ? num : num.padStart(repeatZeros,'0');

  let byteString_reverse = byteString
  .split('')
  .reverse()
  .join('');
  
  return parseInt(byteString_reverse, 2).toString();     

}

// keep this function call here 
console.log(BinaryReversal(readline()));
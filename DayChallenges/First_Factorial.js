// First Factorial ## coderbyte.com

// Examples
// Input: 4
// Output: 24
// Input: 8
// Output: 40320

function FirstFactorial(num) { 

    // code goes here 
    return num > 1 ? FirstFactorial(num - 1) * num : num;
  
  }
     
  // keep this function call here 
//   console.log(FirstFactorial(readline()));
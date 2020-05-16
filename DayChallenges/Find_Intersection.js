// Find Intersection

// Examples
// Input: ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"]
// Output: 1,4,13
// Input: ["1, 3, 9, 10, 17, 18", "1, 4, 9, 10"]
// Output: 1,9,10
// Input: ["1, 2, 3, 4, 5", "6, 7, 8, ,9, 10"]
// Output: false

function FindIntersection(strArr) { 

    // code goes here
    const [arr1,arr2] = strArr.map(v => v.trim().replace(/\s+/g,'').split(','));  
   
    const intersection = arr1.filter(item => arr2.includes(item)).map(Number);
    
    return strArr = !!intersection.join(',') ? intersection.join(',') : false; 
  
  }
     
  // keep this function call here 
//   console.log(FindIntersection(readline()));
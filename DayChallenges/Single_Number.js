// ## Single Number # leetcode.com/

// Example 1:
// Input: [2,2,1]
// Output: 1
// Example 2:
// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function (nums) {

    // ## syntax first try
    // const numsDup = nums.filter((a,b) => nums.indexOf(a) !== b); //Keep only duplicate    
    // const findNotDup = nums.filter(arr => !numsDup.includes(arr));
    // return findNotDup;

    // ## syntax new
    return nums.reduce((a, b) => a ^ b, 0)

};
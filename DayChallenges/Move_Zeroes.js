// ##Happy Number # leetcode.com/

// Example:
// Input: [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Input: [0,0,1]
// Output: [1,0,0]

// Input: [1,0,0,1]
// Output: [1,1,0,0]

// Input: [2,1]
// Output: [2,1]

// Note:
// You must do this in-place without making a copy of the array.
// Minimize the total number of operations.
// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */


// //    /** ---------- #style 01 */
// var moveZeroes = function(nums) {    
//     const filterZero = nums.filter(a => a === 0);
//     const filterArr = nums.filter(a => a !== 0);    
//     nums = [...filterArr, ...filterZero];
//     console.log(nums);
// };


// //    /** ------------ #style 02 */
// var moveZeroes = function(nums) {
    
//     let count = 0;
//     for(let i=nums.length; i >= 0; i--){  //# cannot loop 0 to last (problem splice ans push)
//         if (nums[i] === 0) {            
//             nums.splice(i,1);        
//             count++;
//         }
//     }
//     for(let x=0; x<count; x++){
//         nums.push(0);
//     }   
//     console.log(nums);
// };


//    /** ------------ #style 03 */
var moveZeroes = function(nums) {

    for(let i=nums.length; i >= 0; i--){        
        if (nums[i] === 0) {            
            nums.splice(i,1);
            nums.push(0);
        }
    }
    console.log(nums);
};
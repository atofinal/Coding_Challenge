// ##Happy Number # leetcode.com/

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]

// /**
//  * @param {string[]} strs
//  * @return {string[][]}
//  */

var groupAnagrams = function(strs) {
    
    // // /** #---------- style 01 */
    // let newSet = [...new Set(strs.map(item => sortString(item)))]
    // let groupSet = strs.reduce((a,b) => {
    //     let i = newSet.indexOf(sortString(b))
    //     a[i] = [...a[i]||[],b];
    //     return a;
    // } , []);    
    // return groupSet;    
    // function sortString(item) {
    //     return item.split('').sort().join('');
    // }


    // /** #---------- style 02 */
    let newSet = [...new Set(strs.map(item => Array.from(item).sort().join('')))]
    let groupSet = strs.reduce((a,b) => {
        let i = newSet.indexOf(Array.from(b).sort().join(''))
        a[i] = [...a[i]||[],b];
        return a;
    } , []);    
    return groupSet;

};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
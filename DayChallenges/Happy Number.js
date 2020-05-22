// ##Happy Number # https://leetcode.com/

// Those numbers for which this process ends in 1 are happy numbers.
// Return True if n is a happy number, and False if not.

// Input: 19
// Output: true
// Explanation:
// 1^2 + 9^2 = 82
// 8^2 + 2^2 = 68
// 6^2 + 8^2 = 100
// 1^2 + 0^2 + 02 = 1

// Input: 2
// Output: false
// [2^2]             = 4
// [4^2]             = 16
// [1^2 + 6^2]       = 37
// [3^2 + 7^2]       = 58
// [5^2 + 8^2]       = 89
// [8^2 + 9^2]       = 145
// [1^2 + 4^2 + 5^2] = 42
// [4^2 + 2^2]       = 20
// [2^2 + 0^2]       = 2

// Input: 7
// Output: true
// [7^2]             = 49
// [4^2 + 9^2]       = 97
// [9^2 + 7^2]       = 130
// [1^2 + 3^2 + 0^2] = 10

// Input: isHappy(536)   
// Output: true
// [5, 3, 6] 70
// [7, 0] 49        # O_o need check count
// [4, 9] 97
// [9, 7] 130
// [1, 3, 0] 10



var isHappy = function (n) {

    const fncSplit = (arr) => arr.toString().replace(/\W+/g, '').split('').map(Number);

    let arrNum = fncSplit(n); // # for first
    let calculateN = n;  // # for first
    let count = 0;
    while (n > 1) {        
        arrNum = fncSplit(calculateN);
        if (calculateN === 1) { break; }
        if (arrNum.length === 1) {
            calculateN = calculateN ** 2;
        } else {
            calculateN = arrNum.reduce((a, b) => (arrNum.indexOf(a) === 0 ? a**2 : a) + (b**2));

            if (arrNum[1] === 0 && count > 1) { break; } // # break Loop infinite          
        }
        
        if (n === calculateN) { break; } // # Check dup infinite Loop ,after process *************
        n = calculateN;
        count++;
        // console.log(arrNum, calculateN);
    }

    return calculateN === 1;
};
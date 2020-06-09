// ##Happy Number # leetcode.com/

// Example 1:
// Input: [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
//              Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Example 2:
// Input: [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
//              Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
//              engaging multiple transactions at the same time. You must sell before buying again.
// Example 3:
// Input: [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transaction is done, i.e. max profit = 0.

// /**
//  * @param {number[]} prices
//  * @return {number}
//  */

var maxProfit = function(prices) {    
    let profit = 0;
    let setBuyA = prices.reduce((a,b,i) => {  
        // console.log(`a=${a} ,b=${b}`);     
        if (b < prices[i+1]) {
            if (a === null) {
                a = b;
            }
        } else {
            if (a !== null) {
                profit = profit + (b - a);
                a = null;
                // console.log(`---------- profit= ${profit}`);   
            }
        }           
        return a;
    } ,null);        
    return profit > 0 ? profit : 0 ;    
};

console.log(maxProfit([7,1,5,3,6,4]));
console.log(maxProfit([1,2,3,4,5]));
console.log(maxProfit([7,6,4,3,1]));
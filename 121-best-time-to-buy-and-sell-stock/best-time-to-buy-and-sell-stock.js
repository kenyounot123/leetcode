/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    // input is an array of nums
    // output is max profit or 0
    // prices =[7,1,5,3,6,4]
    // no negatives, length can be 1

    // while iterating determine when to buy
    // and determine when to sell


    let maxPrice = 0
    let l = 0
    let r = 1
    while (r < prices.length) {
        if (prices[r] < prices[l]) {
            l = r
            r++
        } else {
            profit = prices[r] - prices[l]
            maxPrice = Math.max(maxPrice, profit)
            r++
        }
    }
    return maxPrice

};
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;

    for (let i = 0; i < prices.length; i++) {
        let r = i + 1;
        while (prices[i] < prices[r]) {
            const profit = prices[r] - prices[i]
            max = Math.max(profit, max)
            r++
        }
    }
    return max
}
# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    # Input: prices[] nums
    # Output: will be either 0 or profit
    # If prices is sorted and is in descending order, then we return 0
    profit = 0
    l = 0
    r = 0
    while l <= r && r < prices.length
        if prices[r] <= prices[l]
            l = r
            r += 1
            next
        else
            profit = [profit, prices[r] - prices[l]].max
        end
        r += 1
    end
    profit
end
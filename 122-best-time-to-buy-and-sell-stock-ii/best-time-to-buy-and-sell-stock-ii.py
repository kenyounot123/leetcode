class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        l = 0
        for r in range(1,len(prices)):
            if prices[l] >= prices[r]:
                l = r
                continue
            else:
                max_profit += prices[r] - prices[l]
                l = r
        return max_profit
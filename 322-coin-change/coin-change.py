class Solution:
    def coinChange(self, coins: List[int], amount: int) -> int:
        dp = [amount + 1] * (amount + 1)
        dp[0] = 0
        # dp array represents the optimal number of coins to make that amount
        # dp[4] = 2 so this means it takes 2 coins to make amount 4

        for i in range(1, amount + 1):
            # i - c is the amount we need to make
            for c in coins:
                if c <= i:
                    dp[i] = min(dp[i], 1 + dp[i - c])

        # The whole dp array was built bottom up in order to use the previous values to build up to
        # our target which is the amount
        return dp[-1] if dp[-1] != amount + 1 else -1

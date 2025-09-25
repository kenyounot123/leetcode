class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # return minimum k such that all bananas are gone within h hours
        def can_finish(num_bananas):
            hours = 0
            for num in piles:
                hours += num // num_bananas
                if num % num_bananas != 0:
                    hours += 1
                if hours > h:
                    return False
            return True

        k = 0

        l = 1
        r = max(piles)

        while l <= r:
            mid = (l + r) // 2
            if can_finish(mid):
                k = mid
                r = mid - 1
            else:
                l = mid + 1
        return k
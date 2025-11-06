class Solution:
    def minEatingSpeed(self, piles: List[int], h: int) -> int:
        # return minimum k such that all bananas are gone within h hours

        # Determine an eating speed such that all bananas will be gone within h hours
        # [4,11,20,23,30]

        def hours_to_finish(eating_speed):
            hours = 0
            for i,p in enumerate(piles):
                if p % eating_speed == 0:
                    hours += p // eating_speed
                else:
                    hours += p // eating_speed + 1
            return hours



        max_bananas = max(piles)
        l = 1
        r = max_bananas

        while l < r:
            mid = (l+r) // 2
            if hours_to_finish(mid) > h:
                l = mid + 1
            else:
                r = mid

        return l
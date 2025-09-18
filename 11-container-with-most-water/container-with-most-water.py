class Solution:
    def maxArea(self, height: List[int]) -> int:
        # inputs: height:int[]
        # output: find max amount of water int

        # we can do 2pointers with greedy approach
        max_area = 0
        l = 0
        r = len(height) - 1
        while l < r:
            width = (r - l)
            if height[l] <= height[r]:
                area = width * height[l]
                max_area = max(max_area, area)
                l += 1
            else:
                area = width * height[r]
                max_area = max(max_area, area)
                r -= 1
        

        return max_area
class Solution(object):
    def trap(self, height):
        """
        :type height: List[int]
        :rtype: int
        Given n non-negative integers
        width of each bar is 1
        inputs: array of nums that repressent height of a bar
        outputs: integer amount of rainwater trapped

        water is never trapped at the endpoints
        water can only be trapped if it between two non zero heights
        heights = [2,1,0,1,3]
        2 no rain water can be trapped here since it is an endpoint
        1, 2 - 1 = 1 can be trapped here
        0, 2 -0 = 2 can be trapped here
        1 , 2 - 1 = 1
        3, greater than 2 so no water can be trapped 

        so this is kind of sliding window and two pointers
        """

        l = 0
        r = len(height) - 1
        l_max = height[l]
        r_max = height[r]
        water_trapped = 0
        while l < r:
            if l_max <= r_max:
                l += 1
                l_max = max(height[l], l_max)
                water_trapped += l_max - height[l]
            else:
                r_max = max(height[r], r_max)
                water_trapped += r_max - height[r]
                r -= 1
        return water_trapped

        
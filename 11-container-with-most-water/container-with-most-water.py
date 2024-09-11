class Solution(object):
    def maxArea(self, height):
        """
        :type height: List[int]
        :rtype: int
        """
        '''
        given an integer array height of length n
        n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i])
        Find two lines that together with the x-axis form a container
        Return the maximum amount of water a container can store.

        summarize: given an array of nums Height return two lines such that they trap the most water, in other words
        the area of the container formed by these two lines is the max area

        area is given by length x width => in this case width is two indexes i1, i2 and height is height[i]

        we can start from the two end points
        height = [1,8,6,2,5,4,8,3,7]
        at index 0 and index 8
        compare the two heights because a container is formed only by taking area of the smaller height

        '''
        l = 0
        r = len(height) - 1
        max_area = 0
        while l < r:
            area = (r - l) * min(height[l], height[r])
            max_area = max(area, max_area)
            if height[l] < height[r]:
                l += 1
            else:
                r -= 1

        return max_area

        
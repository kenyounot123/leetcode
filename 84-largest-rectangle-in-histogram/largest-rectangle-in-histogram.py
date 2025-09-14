class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # inputs: integers heights[]
        # outputs: return an area int
        # area = heights[i] * i 
        # we need to find a valid i
        max_area = 0
        stack = [] # pair: index, height
        for i, h in enumerate(heights):
            start = i
            while stack and stack[-1][1] > h:
                idx, height = stack.pop()
                max_area = max(max_area, height * (i - idx))
                start = idx
            stack.append([start, h])

        for i, h in stack:
            width = len(heights) - i
            max_area = max(max_area, h * width)

        return max_area





        return max_area
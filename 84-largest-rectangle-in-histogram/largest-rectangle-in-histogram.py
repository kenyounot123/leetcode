class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # inputs: integers heights[]
        # outputs: return an area int
        # area = heights[i] * i 
        # we need to find a valid i

        stack = [[0,heights[0]]]
        max_area = 0

        for i in range(1,len(heights)): 
            if heights[i] >= stack[-1][1]:
                stack.append([i,heights[i]])
            else:
                while stack and heights[i] < stack[-1][1]:
                    idx,height = stack.pop()
                    current_area = height * (i - idx)
                    max_area = max(max_area, current_area)
                stack.append([idx, heights[i]])

        for i, h in stack:
            width = len(heights) - i
            max_area = max(max_area, h * width)
        
        return max_area
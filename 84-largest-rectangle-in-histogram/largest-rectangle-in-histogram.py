class Solution:
    def largestRectangleArea(self, heights: List[int]) -> int:
        # inputs: integers heights[]
        # return area of largest rectangle

        stack = [[0, heights[0]]]
        max_area = 0

        for idx, height in enumerate(heights):
            if height >= stack[-1][1]:
                stack.append([idx, height])
            else:
                while stack and height < stack[-1][1]:
                    i, h = stack.pop()
                    area = (idx - i) * h 
                    max_area = max(max_area, area)
                stack.append([i, height])


        for i, h in stack:
            width = len(heights) - i
            area = width * h
            max_area = max(max_area, area)

        return max_area


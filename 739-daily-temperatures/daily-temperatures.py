class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        # return an array answer
        # answer[i] is the number of days you have to wait after the ith day to get 
        # a warmer temp or 0 if no warmer temp

        answer = [0] * len(temperatures)
        stack = []

        for i,temp in enumerate(temperatures):
            if len(stack) == 0:
                stack.append([i,temp])
                continue
            
            while stack and temp > stack[-1][1]:
                stack_index, stack_temp = stack.pop()
                answer[stack_index] = i - stack_index
            

            stack.append([i, temp])

        return answer
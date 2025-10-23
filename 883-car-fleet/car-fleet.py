class Solution:
    def carFleet(self, target: int, position: List[int], speed: List[int]) -> int:
        cars = [[p,s] for p,s in zip(position,speed)]

        stack = []
        
        for car in sorted(cars)[::-1]:
            p,s = car
            time_to_target = (target - p) / s
            if stack and time_to_target <= (target - stack[-1][0]) / stack[-1][1]:
                continue
            else:
                stack.append(car)
        
        return len(stack)

class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        encountered_numbers = {}
        l = 0
        for r,num in enumerate(numbers):
            val = target - num
            if val in encountered_numbers:
                return [encountered_numbers[val] + 1, r + 1]
            else:
                encountered_numbers[num] = r
            l += 1

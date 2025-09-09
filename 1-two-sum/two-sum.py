class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # inputs: nums[] and an integer target
        # output: return 2 indices[x,y] s.th nums[x] + nums[y] == target
        nums_hash = {}
        for i in range(0, len(nums)):
            diff = target - nums[i]
            if diff in nums_hash:
                return [nums_hash[diff], i]
            else:
                nums_hash[nums[i]] = i
        return False
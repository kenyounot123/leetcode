class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        # [-4, -1, -1, 0, 1, 2]

        for idx,num in enumerate(nums):
            if idx > 0 and num == nums[idx - 1]:
                continue
            l = idx + 1
            r = len(nums) - 1

            while l < r:
                total =  num + nums[l] + nums[r]
                if total > 0:
                    r -= 1
                elif total < 0:
                    l += 1
                elif total == 0:
                    res.append([nums[idx], nums[l], nums[r]])
                    l += 1
                    while l < r and nums[l] == nums[l - 1]:
                        l += 1
        

        return res


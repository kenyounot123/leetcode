class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        # sum has to equal 0 find the triplets
        # no duplicate triplets
        # 3 pointers
        target = 0
        res = []
        nums.sort()
        # [-4, -1, -1, 0, 1, 2]
        for i in range(len(nums)):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            j = i + 1
            k = len(nums) - 1

            while j < k:
                if nums[i] + nums[j] + nums[k] == target:
                    res.append([nums[i],nums[j],nums[k]])
                    j += 1
                    while j < k and nums[j] == nums[j - 1]:
                        j += 1
                elif nums[i] + nums[j] + nums[k] < target:
                    j += 1
                else:
                    k -= 1

        return res

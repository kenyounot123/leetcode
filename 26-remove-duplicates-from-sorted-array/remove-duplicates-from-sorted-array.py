class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        unique_elements = 1
        l = 1
        for i in range(1,len(nums)):
            if nums[i] > nums[i - 1]:
                print(l)
                nums[l] = nums[i]
                l += 1
                unique_elements += 1
        
        return unique_elements
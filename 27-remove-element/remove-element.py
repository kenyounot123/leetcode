class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        k = 0
        l = 0

        for r, num in enumerate(nums):
            if num == val:
                nums[r] = "_"
            else:
                nums[l] = num
                k += 1
                l += 1
    
        print(nums)

        return k
class Solution:
    def findMin(self, nums: List[int]) -> int:
        # given the already sorted rotating array nums[]
        # return the minimum element of this array int

        minimum = float("inf")

        l = 0
        r = len(nums) - 1

        # [5,1,2,3,4]
        while l <= r:
            mid = (l + r) // 2
            
            if nums[l] <= nums[mid]:
                minimum = min(minimum, nums[l])
                l = mid + 1
            else:
                minimum = min(minimum, nums[mid])
                r = mid - 1


        return minimum
class Solution:
    def findMin(self, nums: List[int]) -> int:
        # given the already sorted rotating array nums[]
        # return the minimum element of this array int

        min_element = float("inf")

        l = 0
        r = len(nums) - 1

        while l <= r:
            mid = (l + r) // 2
            if nums[l] < nums[r]:
                min_element = min(min_element, nums[l])
                break
            
            if nums[mid] >= nums[l]:
                min_element = min(min_element, nums[l])
                l = mid + 1
            else:
                min_element = min(min_element, nums[mid])
                r = mid

        return min_element 

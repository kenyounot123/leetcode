class Solution:
    def search(self, nums: List[int], target: int) -> int:
        # input: nums[] an array of integers sorted in asccending order and target:int
        # output: the index of target if found, if not then return -1
        # sorted array think bsearch

        l = 0
        r = len(nums) - 1
    
        while l <= r:
            mid = (r + l) // 2
            if target == nums[mid]:
                return mid
            elif target < nums[mid]:
                r = mid -1
            else:
                l = mid + 1

        return -1
            


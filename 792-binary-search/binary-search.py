class Solution(object):
    def search(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: int
        """
        # inputs: array of integers nums (ascending order) and a integer target
        # output: return index of target or -1
        # summarize: given an array of integers that are in ascending order and a 
        # target, return the index of the target if found, if not return -1
        # O(n) time complexity of iterating through the whole array
        # can we make this faster ?
        # its sorted so can do binary search
        l = 0
        r = len(nums) - 1
        while (l < r):
            mid = (l + r) // 2
            if (nums[mid] < target):
                l = mid + 1
            else:
                r = mid
            
        
        return l if nums[l] == target else -1
        
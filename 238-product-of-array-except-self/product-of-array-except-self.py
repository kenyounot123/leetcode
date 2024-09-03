class Solution(object):
    def productExceptSelf(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        """
        
        '''
        Given an integer array nums

        Return an array answer where answer[i] is equal to the product of all the elements of nums except nums[i].

        O(n) time and without using the division operation.

        Can you solve the problem in O(1) extra space complexity? 

        summarize: given an array of nums , return an array where each index i is equal to product of all elements except nums[i]

        nums = [1,2,3,4]
        [1,1,2,6]
        [24,12,4,1]
        with division we can just loop through nums first time to get the product, then loop through a second time divinging it by nums[i]
        we iterate through nums array starting at 1
        1 
        24 = 2 * 3 * 4
        at 1 what are my options? get the product everything to its right and left, left has nothing so product is 1
        at each position i its left product + right product
        2
        at 1 what are my options? get the product everything to its right and left

        [24,12,8,6]
        nums = [1,2,3,4]
        [1,1,2,6]
        [24,12,4,1]
        '''
        answer = [1] * len(nums)
        prefix = 1
        for i in range(len(nums)):
            answer[i] = prefix
            prefix *= nums[i]

        postfix = 1
        for i in range(len(nums) - 1, -1, -1):
            answer[i] *= postfix
            postfix *= nums[i]
        return answer
            


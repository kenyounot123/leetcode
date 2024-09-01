class Solution(object):
    def topKFrequent(self, nums, k):
        """
        :type nums: List[int]
        :type k: int
        :rtype: List[int]
        """
        '''
        Given an integer array nums integer k
        return the k most frequent elements.

        given an array of nums and a integer k, we return the k most frequent elements.
        this means return the k elements that appear the most

        k is in the range [1, the number of unique elements in the array].
        It is guaranteed that the answer is unique.
        edge case:
            k = len(nums)
            return nums

        Your algorithm's time complexity must be better than O(n log n), where n is the array's size.
        if we sort then its O(n log n) so no sorting.

        nums = [1,1,1,2,2,3] k = 2
        Output: [1,2]

        we can store numbers in a hashmap to remember them
        hm = {} 
        get the counts of each number
        1 what are my actions ? store in hm if not there yet, if it is then just increment count
        O(n)
        hm = {
            1: 3, 
            2: 2,
            3: 1
        }
        this is where it gets hard since u cant sort the 
        hasnmap so what do we do after we have the top counts?
        bucket sort i think 
        create new array [] of size 6
        the index of the array is the counts
        interate through hm get the values
        [0,3,2,1,0,0]
        iterate backwards and get the first 2 elements which is [1,2] O(3n) => O(n)
        ''' 
        hm = {}
        arr = [[] for _ in range(len(nums) + 1)]
        output = []
        for num in nums:
            if num in hm:
                hm[num] += 1
            else:
                hm[num] = 1
        for key,value in hm.items():
            arr[value].append(key)
        for freq in range(len(arr) - 1, 0, -1):
            for num in arr[freq]:
                output.append(num)
                k -= 1
                if k == 0:
                    return output
        




        


        

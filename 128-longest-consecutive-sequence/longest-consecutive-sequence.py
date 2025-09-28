class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # we are given an UNSORTED array of ints
        # RETURN: want the length of the longest consecutive element sequence, which will be an int
        # what is considered a valid sequence? if they are increasing by 1
        # cant sort since that is O(nlogn), how do we get an O(n) algorithm
        # duplicate numbers do not count as part of the longest sequence

        # Max sequeunce can ever only be len(nums)

        visited = set(nums)

        longest_seq = 0

        if len(nums) == 0:
            return 0

        for num in visited:
            if (num - 1) not in visited:
                current = num
                count = 1
                while (current + 1) in visited:
                    count += 1
                    current += 1
                
                longest_seq = max(longest_seq, count)


        return longest_seq
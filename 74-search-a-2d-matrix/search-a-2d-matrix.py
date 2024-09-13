class Solution(object):
    def searchMatrix(self, matrix, target):
        """
        :type matrix: List[List[int]]
        :type target: int
        :rtype: bool
        """
        '''
        inputs: m x n matrix and an integer target
        output: boolean 
        summarize: we are given a mxn matrix where each row 
        is ascending order and the first integer of each row
        is greater tahn the last integer of previous row. Given a target,
        return true if this target is in the matrix, false otherwise

        m == matrix.length
        n == matrix[i].length
        O(log(m * n)) => binary search ?

        brute force is to iterate through each nested array O(m*n)
        '''
        l = 0
        r = len(matrix) - 1
        # This finds which nested array target is in
        while l < r:
            mid = (l + r) // 2
            if (target > matrix[mid][len(matrix[mid]) - 1]):
                l = mid + 1
            else:
                r = mid
        
        targetRow = matrix[l]
        l = 0
        r = len(targetRow) - 1
        while l < r:
            mid = (l + r) // 2
            if target > targetRow[mid]:
                l = mid + 1
            else:
                r = mid
        return True if targetRow[l] == target else False

        



        
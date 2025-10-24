class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = len(matrix) - 1

        while l < r:
            m = (l + r) // 2
            
            # 20 > 60
            if target > matrix[m][-1]:
                l = m + 1
            else:
                r = m
            
        target_row = l

        new_l = 0
        new_r = len(matrix[target_row]) - 1

        while new_l < new_r:
            m = (new_l + new_r) // 2
            
            if target > matrix[target_row][m]:
                new_l = m + 1
            else:
                new_r = m

        return True if target == matrix[target_row][new_l] else False
        

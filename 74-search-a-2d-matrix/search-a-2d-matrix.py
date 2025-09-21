class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        l = 0
        r = len(matrix) - 1

        while l < r:
            mid = (l + r) // 2
            row = matrix[mid]
            if target > row[len(matrix[mid]) - 1]:
                l = mid + 1
            else:
                r = mid
        
        target_row = matrix[l]
        l = 0
        r = len(target_row) - 1

        while l < r:
            mid = (l + r) // 2
            if target > target_row[mid]:
                l = mid + 1
            else:
                r = mid
        return True if target_row[l] == target else False

        


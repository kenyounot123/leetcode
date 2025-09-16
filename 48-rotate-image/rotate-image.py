class Solution:
    def rotate(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        # inputs: n x n matrix
        # modify inplace and return the original matrix
        # rotating a matrix 90 degrees involves two main steps:
            # swap top rows with bottom rows
            # swap across diagonal
        
        rows, cols = len(matrix), len(matrix)
        top = 0
        bottom = len(matrix) - 1
        # swap top bottom
        while top <= bottom:
            tmp = matrix[top]
            matrix[top] = matrix[bottom]
            matrix[bottom] = tmp
            top += 1
            bottom -= 1
        
        for r in range(rows):
            for c in range(r, cols):
                tmp = matrix[r][c]
                matrix[r][c] = matrix[c][r]
                matrix[c][r] = tmp
        
        return matrix

        
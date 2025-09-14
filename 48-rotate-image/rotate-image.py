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

        length = len(matrix)
        top, bottom = 0, length - 1

        # nothing happens to middle row if odd
        while top < bottom:
            for i in range(length):
                tmp = matrix[top][i]
                matrix[top][i] = matrix[bottom][i]
                matrix[bottom][i] = tmp
            top += 1
            bottom -= 1
        
        for i in range(length):
            for j in range(i + 1, length):
                print(matrix[i][j])
                tmp = matrix[i][j]
                matrix[i][j] = matrix[j][i]
                matrix[j][i] = tmp

        return matrix
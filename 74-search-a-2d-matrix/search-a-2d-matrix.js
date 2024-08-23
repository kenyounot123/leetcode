/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/*
Given m x n integer matrix 
    - m == matrix.length 
    - n == matrix[i].length
    - all integers
    - does not have to be a square
    - 1 <= m, n <= 1000
Each row is sorted in non-decreasing order
    - each row is always increasing 
    - values in the matrix can be negative
The first integer of each row is greater than the last integer of the previous row.
    - first integer of each row === matrix[i][0]
    - last integer of previous row === matrix[i][n - 1]
Given an integer target, return true if target is in matrix or false otherwise.
    - target is given and <= 10000

example 1 
    (Brute Force)
    - target given === 3
    - to check the matrix you would have to iterate through it so,
    - pick a starting point (left to right)
    - loop through matrix length 
    - for each matrix[i] we loop through the nested array matrix[i][j] and see if it matches the target
    - for each value we have to check if target greater or less than it 
    - if value is greater than target return false 
    - else continue through loop
    How would I try to optimize this ? 
        - lets say we have a matrix of size 10 x 10
        - it would be too slow to start in the beginning so where would i start ?
        - binary search.... time complexity for this is also O(log(m*n))
    Example 1 with binary search:


O(log(m * n))
*/


var searchMatrix = function(matrix, target) {
    let left = 0
    let right = matrix.length - 1
    let row = 0
    while (left <= right) {
        const mid = left + Math.floor(right - left / 2)
        if (target < matrix[mid][0]) {
            right = mid - 1
        } else if (target > matrix[mid][matrix[mid].length - 1]) {
            left = mid + 1
        } else {
            row = mid
            break
        }
    }
    if (!(left <= right)){
        return false
    }
    right = matrix[row].length - 1
    while (left <= right) {
        const mid = left + Math.floor(right - left / 2)
        if (target < matrix[row][mid]) {
            right = mid - 1
        } else if (target > matrix[row][mid]) {
            left = mid + 1
        } else {
            return true
        }
    }
    return false
};
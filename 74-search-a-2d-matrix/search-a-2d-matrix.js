/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let left = 0;
    let right = matrix.length - 1
    let row = 0;
    // Use binary search to get the row where our target lies
    while (left <= right) {
        // Get the middle row first to check if target is contained in this row, greater, or less than this row
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
    console.log(left)
    console.log(right)
    console.log(left <= right)
    if (!(left <= right)){
        return false
    }
    // Then do another binary search on that specific row to get the target
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

// [0,1,2,3,4,5]
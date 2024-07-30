/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Let us first get the product of nums because we will need this number
    let n = nums.length
    let answer = []
    let left = Array(n).fill(1)
    let right = Array(n).fill(1)
    // Create an array containing the product of all the elements to the left of i
    // and one for the product of all the elements to the right of i
    for(let i = 1; i < n; i++) {
        left[i] = nums[i - 1] * left[i - 1]
    }
    for(let i = n - 2; i >= 0; i--) {
        right[i] = nums[i + 1] * right[i + 1]
    }
    // Multiply right and left arrays to get answer
    for(let i = 0; i < n; i++) {
        answer[i] = left[i] * right[i]
    }
    return answer
};
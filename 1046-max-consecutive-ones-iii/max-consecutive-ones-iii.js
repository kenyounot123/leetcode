/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {
    // Inputs: we are given an array nums filled with 1s and 0s and also an integer k
    // Outputs: return a max number of CONSECUTIVE 1s, flipping at most k 0s
    // Summarize: we want to find a sub array of consecutive 1s given we are able to flip
    // 0s into 1s at most k times.

    let maxOnes = 0
    let l = 0
    let r = 0
    while (r < nums.length) {
        if (nums[r] === 0) {
            k--
        }
        while (k < 0) {
            if (nums[l] === 0) {
                k++
            }
            l++
        }
        maxOnes = Math.max(maxOnes, r - l + 1)
        r++
    }


    return maxOnes


};
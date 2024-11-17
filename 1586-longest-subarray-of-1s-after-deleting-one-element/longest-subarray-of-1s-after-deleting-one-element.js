/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function(nums) {
    let maxOnes = 0
    let l = 0
    let r = 0
    let k = 1
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

    return k === 1 ? nums.length - 1 : maxOnes - 1

};
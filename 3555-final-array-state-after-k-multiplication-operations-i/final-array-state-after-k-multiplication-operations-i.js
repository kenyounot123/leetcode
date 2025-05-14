/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} multiplier
 * @return {number[]}
 */
var getFinalState = function(nums, k, multiplier) {
    // inputs: nums[] and two integers k and multiplier
    // outputs: an integer []
    // for each num perform operation and return value, get final output as num[]

    while (k > 0) {
        const min = Math.min(...nums)
        // find min
        index = nums.indexOf(min)
        // update value at index of min
        nums[index] = min * multiplier
        k -= 1
    }

    return nums
};
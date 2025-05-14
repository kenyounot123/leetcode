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

    // O(k(logn))
    // O(1)
    while (k > 0) {
        // find min
        const min = Math.min(...nums)
        // update value at index of min
        index = nums.indexOf(min)
        nums[index] = min * multiplier
        k -= 1
    }

    return nums
};
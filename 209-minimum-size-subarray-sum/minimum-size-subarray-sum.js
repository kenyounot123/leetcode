/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
 /*
    inputs: nums and a target
    outputs: return 0 or min length of a subarray whose sum is >= target
 */
var minSubArrayLen = function(target, nums) {
    let min = Infinity
    let l = 0
    let r = 0
    let sum = 0
    while (r < nums.length) {
        sum += nums[r]
        while (sum >= target) {
            // this means our window is valid
            min = Math.min(min, (r - l + 1))
            sum -= nums[l]
            l++
        }
        r++
    }
    return min == Infinity ? 0 : min
};
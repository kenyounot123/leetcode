/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let l = 0;
    let r = 0
    while (r < nums.length) {
        if (nums[r] !== 0) {
            const tmp = nums[r]
            nums[r] = nums[l]
            nums[l] = tmp
            l++
        }
        r++
    }
    return nums
};
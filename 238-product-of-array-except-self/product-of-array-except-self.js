/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let output = new Array(nums.length).fill(1)
    // [1,1,2,6]
    // [,8,6]

    for (let i = 0; i < nums.length; i++) {

        if (i === 0) {
            output[i] = 1;
        } else {
            output[i] = nums[i - 1] * output[i - 1];
        }
    }
    // nums = [1,2,3,4]
    // output = [1,12,8,6]
    let right = nums[nums.length - 1]
    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            continue
        } else {
            output[i] = right * output[i];
            right = nums[i] * right
        }
    }
    return output
};  
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // nums = [1,2,3,4]
    // [1, 1, 2, 6]
    let output = new Array(nums.length).fill(1)
    for (let i = 0; i < nums.length; i++) {
        if (i === 0) { // left boundary product should be 1 because nothing on the left
            continue
        }
        output[i] = output[i - 1] * nums[i - 1]
    }

    let rightProd = nums[nums.length - 1]

    for (let i = nums.length - 1; i >= 0; i--) {
        if (i === nums.length - 1) {
            continue
        }
        output[i] = output[i] * rightProd
        rightProd *= nums[i]
    }

    return output

};  
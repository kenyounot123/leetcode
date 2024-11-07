/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // nums = [1,2,3,4]
    // answer = [1,1,2,6]

    // want = [24,12,8,6]
    let answer = new Array(nums.length).fill(1)
    for (let i = 1; i < nums.length; i++) {
          answer[i] = answer[i - 1] * nums[i - 1];
    }
    let right = nums[nums.length - 1]
    for (let i = nums.length - 2; i >= 0; i--) {
        answer[i] = answer[i] * right
        right *= nums[i]
    }
    



    return answer
};
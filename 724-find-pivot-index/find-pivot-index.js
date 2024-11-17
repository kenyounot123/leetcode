/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    // given an array of nums we want to return the index where the left sum is 
    // equal to the right sum at that index (NOT including the index value)
    // if no index exists return -1
    // and at the boundaries, if left boundary, left sum is 0 if right boundary
    // right sum is 0 
    // [0,1,8,11,17,22]
    // [28,27,20,17,11,6,0]

    let leftSum = [0]
    for (let i = 1; i < nums.length; i++) {
        leftSum.push(leftSum[i - 1] + nums[i - 1])
    }
    let rightSum = new Array(nums.length).fill(0)
    for (let i = nums.length - 2; i >= 0; i--) {
        rightSum[i] = (rightSum[i + 1] + nums[i + 1])
    }
    for (let i = 0; i < nums.length; i++) {
        if (rightSum[i] === leftSum[i]) {
            return i
        }
    }


    return -1
};
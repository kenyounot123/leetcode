/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    // inputs consist of an array nums[] and an integer k
    // ouput: we will return a float
    // summarize: given an array of nums and an integer k we want to find a subarray whose length is equal to k and has a maximum avg value and then
    // return this value. 

    let maxAvgValue = -Infinity

    let l = 0
    let r = 0

    let sum = 0
    while (r < nums.length) {
        sum += nums[r]
        if ((r - l + 1) == k) {
            maxAvgValue = Math.max(maxAvgValue, (sum / k))
            sum -= nums[l]
            l++
        }
        r++
    }





    return maxAvgValue


};
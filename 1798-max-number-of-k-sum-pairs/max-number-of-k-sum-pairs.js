/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    // We are given two inputs, nums = [] and k = integer
    // for outputs we want to return a max integer

    // summarize: Given an integer array and a integer number, we want to find all the pairs in nums[] such that they sum up to k
    // return the number of pairs

    // Once pair is found we can 'take them out' of the nums array 

    let maxPairs = 0

    let l = 0;
    let r = nums.length - 1

    nums.sort((a,b) => a - b)
    
    while (l < r) {
        if (nums[l] + nums[r] === k) {
            maxPairs += 1
            l++
            r--
        } else if (nums[l] + nums[r] < k) {
            l++
        } else if (nums[l] + nums[r] > k) {
            r--
        }
    }



    return maxPairs
};
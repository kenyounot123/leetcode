/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // inputs: nums[]
    // output: a number that is missing from the array 
    // n ( n + 1 ) / 2
    const size = nums.length
    let sum = 0
    for (let num of nums) {
        sum += num
    }
    return ((size * (size + 1)) / 2) - sum


};
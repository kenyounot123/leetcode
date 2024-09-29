/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    // inputs: nums[]
    // output: a number that is missing from the array
    for (let i = 0; i <= nums.length; i++) {
        if (nums.includes(i)) {
            continue
        } else 
        return i
    }


};
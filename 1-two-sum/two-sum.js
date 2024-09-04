/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // summarize: given array of integers nums and a target, find the two numbers that sum up to target
    // guaranteed 1 valid answer
    // output is index
    // less than O(n^2)
    // nums.length >= 2
    // iterate through nums [2,7,11,15] 
    // store 2 in {2:0} 
    let hm = new Map()
    let result = []
    for (let i = 0; i <= nums.length; i++) {
        const difference = target - nums[i]
        if (hm.has(difference)) {
            return [i, hm.get(difference)]
        } else {
            hm.set(nums[i], i)
        }
    }
};
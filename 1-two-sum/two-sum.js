/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // inputs: nums[] and target(number)
    // outputs: [] containts indexes
    // nums = [3,2,4] target = 6
    // { 3 : 0, 2 : 1,  }
    let hm = new Map()
    for (let i = 0; i < nums.length; i++) {
        if (hm.has(target - nums[i])) {
            return [hm.get(target - nums[i]), i]
        }
        hm.set(nums[i], i)
    }


};
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // Given an integer array nums, return true if any value appears at least twice 
    // false if every element is distinct.
    let hm = new Map()
    for (let num of nums) {
        hm.set(num, (hm.get(num) || 0) + 1)
    }
    for (let val of hm.values()) {
        if (val > 1) {
            return true
        }
    }
    return false

};
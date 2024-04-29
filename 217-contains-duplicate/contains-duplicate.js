/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let h = new Map()
    for (let num of nums) {
        if (h.has(num)) {
            return true
        } else {
            h.set(num, h.get(num) + 1)
        }
    }
    return false
};
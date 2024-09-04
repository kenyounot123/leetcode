/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // nums is an array of integers sorted in ascending order
    // inputs: nums and an integer target
    // outputs: the index of target or -1
    // hints: ascending order, and O(logn) = binary search

    let l = 0;
    let r = nums.length - 1
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (target > nums[mid]) {
            l = mid + 1
        } else if (target < nums[mid]){
            r = mid - 1
        } else {
            return mid
        }
    }
    return -1
};

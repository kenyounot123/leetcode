/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    // input: nums array which is sorted in ascending order but rotated
    // outputs: return a number which is the minimum element
    // summarize: given an array of nums that is already sorted but rotated some amount 
    // of times, we need to find the minimum element of this array.
    // if it was just a normal sorted array , we can just return nums[0], but the first
    // index in this rotated array is not always going to be the position of the 
    // smallest element
    let l = 0
    let r = nums.length - 1
    // nums[l] > nums[r]
    // [4,0,1,2,3]
    let min = 9999
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        if (nums[l] <= nums[r]) {
            min = Math.min(min, nums[l])
            break
        }
        if (nums[mid] >= nums[l]) {
            min = Math.min(min, nums[l])
            l = mid + 1
        } else {
            min = Math.min(min, nums[mid])
            r = mid - 1
        }
    }
    return min
};
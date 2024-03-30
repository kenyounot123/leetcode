/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // let lo = 0, hi = nums.length-1;
    // while (lo < hi) {
    //     let mid = lo + Math.floor((hi-lo+1)/2);
    //     if (target < nums[mid]) {
    //         hi = mid - 1
    //     } else {
    //         lo = mid; 
    //     }
    // }
    // return nums[lo]==target?lo:-1;
    let low = 0
    let high = nums.length - 1
    while (low < high) {
        let mid = low + Math.floor( (high - low) / 2)
        if (target > nums[mid]) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }
    return nums[low] == target ? low : -1
};
/**
 * @param {number[]} nums
 * @return {boolean}
 */

// Given an integer array nums
//     - int[]
//     - length of nums is small
//     - values can be negative or positive
// return true if any value appears at least twice in the array

// return false if every element is distinct

// Example 1:
//     [1,2,3,1]
//     start iterating the array :
//         1 ,2 ,3 ,1
//         - 1 ( is this a duplicate ? ) no 
//             - 2 ( is this a duplicate ?) no 
//                 -3 ( is this a duplicate ?) no
//                     -1 (is this a duplicate ?) YES

//         return true
// TC:
//     O(n) n = number of items in array num[]
// SC:
//     O(1) 

var containsDuplicate = function(nums) {
    const hm = new Map()
    for (num of nums) {
        if (hm.has(num)) {
            return true
        } else {
            hm.set(num, 1)
        }
    }
    return false

};
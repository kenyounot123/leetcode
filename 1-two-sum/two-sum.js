/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
/* 
Given an array of integers nums and an integer target
    -inputs are and array of nums and an integer target
return indices of the two numbers such that they add up to target.
    -outputs are an array of nums of size 2.
You may assume that each input would have exactly one solution
    - there is a guaranteed solution
    - so if input is just and array of size 2 we can just return the index of the nums in that array
You can return the answer in any order.

2 <= nums.length <= 104

-109 <= nums[i] <= 109
    -values can be negative
O(n2) time complexity?

Summary : Given an array of nums and a target, we need to find the two indices of the numbers that add up to target

nums = nums, target = target
decision: 
    - find the two nums that add up to target given nums
    - starting with nums[i] what are my actions?
        - store nums[i] in a hashmap along with its index to be remembered. { nums[i], i }
    - now we are at nums[i] what are my actions ?
        - check hashmap to see if we have a value that makes target when summed. so check for target - nums[i]
        - if 2 exists in hashmap
            - return i and hashmap.get(2) stored in hashmap
        - else 
            - store {nums[i], i} in hashmap and go to next number
O(n) where n is length of nums
*/
var twoSum = function(nums, target) {
    if (nums.length == 2) {
        return [0, 1]
    }
    const numAndIndex = new Map()
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i]
        if (numAndIndex.has(diff)) {
            return [i, numAndIndex.get(diff)]
        } else {
            numAndIndex.set(nums[i], i)
        }
    }
};
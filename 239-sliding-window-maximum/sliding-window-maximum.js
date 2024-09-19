/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
inputs: nums:number[], k:number
output: number[]
to summarize: we are given an array nums and an integer k which represents our max
window length
while sliding this max window length across our array we continue to take the max 
of each window and return an output array that contains all these maxes

*/
var maxSlidingWindow = function(nums, k) {
    let output = []
    let deque = []
    let l = 0
    let r = 0
    // [1, -1]
    //.     ^
    //      ^
    //  deque = [0,1]
    // output = [1]
    while (r < nums.length) {
        while (deque && nums[r] > nums[deque[deque.length - 1]]) {
            deque.pop()
        }
        deque.push(r)

        if (l > deque[0]) {
            deque.shift()
        }

        if ((r - l) + 1 >= k) {
            output.push(nums[deque[0]])
            l++
        }
        r++
    }

    return output
};
// q = [1]
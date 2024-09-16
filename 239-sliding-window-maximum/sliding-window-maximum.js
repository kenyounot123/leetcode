/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
inputs: nums:number[], k:number
output: number[]
summarize: given a nums array and a window size of k 
we need to find the maximum value of each window when shifted to the right, then append it 
to the output array which is an array of all the maxes.
[1,3,-1]
*/
var maxSlidingWindow = function(nums, k) {
    let deque = []
    let output = []
    let l = 0
    let r = 0
    if (nums.length === 1) {
        return nums
    }
    while (r < nums.length) {
        // while there are values smaller than current value we can pop it off the deque
        while ((deque) && (nums[r] > nums[deque[deque.length - 1]])) {
            deque.pop()
        }
        // only then can we push it on to our decreasing queue
        deque.push(r)
        
        if (l > deque[0]) {
            deque.shift()
        }
        if ((r - l + 1) >= k) {
            output.push(nums[deque[0]])
            l++
        }
        r++
    }
    return output
};
// q = [1]
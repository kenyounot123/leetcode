/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    // Monotonic Deque
    // Queue => FIFO , Deque => can enqueue and dequeue from both ends
    let l = 0;
    let r = 0;
    let queue = []; // indexes 
    let outputWindow = []
    // Loop if our window is still in bounds
    while (r < nums.length) {
        // Since we want montonic decreasing deque, we want pop everything smaller than the item we are pushing
        // So if queue has elements in it and current number is greater than previous numbers in queue,
        // pop all of it.
        while (queue.length && nums[r] > nums[queue[queue.length - 1]]) {
            queue.pop()
        }
        queue.push(r)

        // If left pointer is greater than the index stored in our left most element in the queue, then that means
        // that index is no longer in bounds of our window, shift() to get rid of it.
        if (l > queue[0]) {
            queue.shift()
        }

        // Edge case: since our l and r pointers start at 0, we want to get a valid window size before we start
        // pushing the max and incrementing the left pointer
        if (r + 1 >= k) {
            outputWindow.push(nums[queue[0]])
            l++
        }
        r++
    }
    return outputWindow
};
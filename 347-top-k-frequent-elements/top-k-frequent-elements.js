/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // Initial approach is to just iterate through the nums array while getting the count of each element
    // Then sort it and get the top k choices, but this is O(n log n)
    // Think bucket sort and how you can get the top k elements without sorting
    let freq = new Map()
    let bucket = []
    let finalAns = []

    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    for (const [num, count] of freq.entries()) {
        if (bucket[count]){
            bucket[count].push(num)
        } else {
            bucket[count] = [num]
        }
    }
    
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i]) finalAns.push(...bucket[i])
        if (finalAns.length === k) break
    }
    return finalAns
};
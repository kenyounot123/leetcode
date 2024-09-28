/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
Given an integer array nums and an integer k
return the k most frequent elements

inputs: array nums and an integer k 
outputs: array nums
summarize: given an array of nums and an integer k we want to return the top k most frequent elements

*/

var topKFrequent = function(nums, k) {
    let output = []
    let freq = new Map() // O(n)
    let bucket = []
    // {1:3, 2:2, 3:1}
    // O(n)
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    // buckets = [0,(6,7), (0,1,4,9,-4), (-3)]
    for (let [key, value] of freq) {
        if (bucket[value]) {
            bucket[value].push(key)
        } else {
            bucket[value] = [key]
        }
    }   
    // counts = [[3],[2],[1]]
    for (let i = bucket.length - 1; i >= 0; i--) {
       if (bucket[i]) output.push(...bucket[i])
        if (output.length === k) break
    }

    return output
};
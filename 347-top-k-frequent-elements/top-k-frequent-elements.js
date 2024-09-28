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
    let freq = new Map()
    let counts = new Array(nums.length).fill(0)
    // {1:3, 2:2, 3:1}
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1)
    }
    console.log(freq)
    // counts = [0,[6,7], [0,1,4,9,-4], [-3]]
    for (let [key, value] of freq) {
        if (counts[value - 1] === 0) {
            counts[value - 1] = [key]
        } else {
            counts[value - 1].push(key)
        }
    }   
    // counts = [[3],[2],[1]]
    for (let i = counts.length - 1; i >= 0; i--) {
        // i = 2
        if (counts[i] === 0 ) {
            continue
        } 
        for (let j = 0; j < counts[i].length; j++) {
            if (k > 0) {
                output.push(counts[i][j])
                k--
            } else {
                break
            }
        }

    }

    // [[3],[2],[1],0,0,0,0

    return output



    
};
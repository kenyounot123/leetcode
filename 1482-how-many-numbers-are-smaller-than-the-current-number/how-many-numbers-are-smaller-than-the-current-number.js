/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // Create a sorted copy of nums
    const sorted = [...nums].sort((a, b) => a - b);
    // Create a hash map to store the smallest index for each number
    let hm = new Map();
    
    // Populate the hash map with the smallest index of each unique number in the sorted array
    for (let i = 0; i < sorted.length; i++) {
        if (!hm.has(sorted[i])) {
            hm.set(sorted[i], i);
        }
    }
    
    // Create the output array based on the map
    let output = nums.map(num => hm.get(num));
    
    return output;
};

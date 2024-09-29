/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    let set = new Set(nums) // O(n)
    let outputs = []
    for (let i = 1; i <= nums.length; i++) {
        if (!set.has(i)){
            outputs.push(i)
        }
    }


    return outputs
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // O(n) space
    // let set = new Set(nums)
    let outputs = []
    // for (let i = 1; i <= nums.length; i++) {
    //     if (!set.has(i)){
    //         outputs.push(i)
    //     }
    // }
    // [2,1,2,3]
    // 2 - 1 = 1
    // [-2,1,2,3]
    // O(1)
    for (let num of nums) {
        const index = Math.abs(num) - 1

        if (nums[index] > 0) {
            nums[index] = nums[index] * -1
        }
    }
    
    for (let i = 0; i < nums.length; i++){
        if (nums[i] > 0) {
            outputs.push(i + 1)
        }

    }


    return outputs
};
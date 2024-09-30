/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    // so given an array nums[], we know that nums[i] is always in the range of [1, n] where
    // n is the length of nums[]. So given this array, find the missing numbers and return them
    // there may contain duplicate numbers.

    let hs = new Set()
    let output = []
    for (let i = 1; i <= nums.length; i++) {
        hs.add(i)
    }

    for (let num of nums) {
        if (hs.has(num)) {
            hs.delete(num)
        }
    }

    for (let val of hs.values()) {
        output.push(val)
    }
    return output
    // nums.forEach((num) => {
    //     const indexVisited = Math.abs(num) - 1

    //     nums[indexVisited] = Math.abs(nums[indexVisited]) * -1
    // })

    // for (let i = 0l i < nums.length; i++) {
    //   if (nums[i] > 0) {
    //      output.push(i + 1)
    //   }
    //}
    // return output

};
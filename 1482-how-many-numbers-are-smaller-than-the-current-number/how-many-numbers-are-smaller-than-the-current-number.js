/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    // summarize: for each number at index i we want to find how many numbers are 
    // smaller than it such that j != i where nums[j] < nums[i]
    // nums = [1,2,2,3,8]
    // map = { 1:0, 2:1, 3:3, 8:4}
    // ognums = [8,1,2,2,3]
    // output = [4,0,1,1,]
    const tmp = [...nums].sort((a,b) => a - b)
    let hm = new Map()
    let output = []
    for (let i = 0; i < nums.length; i++) {
        if (!hm.has(tmp[i])) {
            hm.set(tmp[i], i)
        }
    }
    for (let num of nums) {
        output.push(hm.get(num))
    }
    
    return output
};
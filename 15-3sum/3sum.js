/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
    inputs: array nums 
    outputs: array of triplets [nums[i], nums[j], nums[k]] i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
    summarize: given an array of nums we want to find all triplets that sum up to 0
    constraints: nums length >= 3, nums[i] can be negative, no duplicate triplets
    order does not matter

    nums = [-1,0,1,2,-1,-4]
    => [-4,-1,-1,0,1,2]
    iterate through nums array while checking if it sums to 0 
    at -1, we check what is it that we need to get this to sum to 0 => 0 - -1 = +1
    

*/
var threeSum = function(nums) {
    let output = []
    nums.sort((a,b) => (a - b))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue
        }
        let l = i + 1
        let r = nums.length - 1
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if (sum > 0) {
                r -= 1
            } else if (sum < 0) {
                l += 1
            } else {
                output.push([nums[i],nums[l],nums[r]])
                // now move pointers to avoid duplicate iterations
                const prevL = l
                l++ 
                while (nums[prevL] == nums[l] && l < r) {
                    l++
                }

            }
        }
    }
    return output
};
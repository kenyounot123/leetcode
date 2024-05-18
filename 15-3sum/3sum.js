/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // [-4,-1,-1,0,1,2]
    // Approach: do a while a loop for each element in nums to look for two other numbers whose sum will equal 0
    // But this makes it so that there is unecessary loooping being done.
    // How do we get rid of these unecessary steps?
    // -1 -1 2 -> -1 0 1 -> 0
    let ans = []
    if (nums.length < 3) {
        return ans
    }
    nums.sort((a,b) => a - b)
    let target = 0;
    // turn this problem in to 2 sum
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            break
        }
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1
        let r = nums.length - 1
        const partialTarget = target - nums[i]
        while (l < r) {
            if (nums[l] + nums[r] < partialTarget) {
                l++
            } else if (nums[l] + nums[r] > partialTarget) {
                r--
            } else {
                ans.push([nums[i], nums[l], nums[r]])
                const prevL = l
                const prevR = r
                l++
                r--
                while (nums[l] === nums[prevL] && nums[r] === nums[prevR]) {
                    l++
                    r--
                }
            }
        }
    }
    return ans

};
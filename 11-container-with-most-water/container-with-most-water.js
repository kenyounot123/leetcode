/**
 * @param {number[]} height
 * @return {number}
 */
 /*
 You are given an integer array height of length n
 two endpoints of the ith line are (i, 0) and (i, height[i]).
 Find two lines that together with the x-axis form a container, 
 such that the container contains the most water.
 Return the maximum amount of water a container can store.
 inputs: height = nums[]
 outputs: max integer
 summarize: find the two lines such taht the container that they form trap
 the most water. then return the max water contained
 height = [1,1]
 amount of water trapped is just 1 
 this is found by doing (1 - 0) * 1 => i2 - i1 * smaller height
 height = [1,8,6,2]
             l r
 */
var maxArea = function(height) {
    maxWater = 0
    let l = 0
    let r = height.length - 1
    while (l < r) {
        const water = (r - l) * Math.min(height[l], height[r])
        maxWater = Math.max(water, maxWater)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }
    
    return maxWater
};
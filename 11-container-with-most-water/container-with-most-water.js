/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0
    let l = 0
    let r = height.length - 1

    while (l < r) {
        const maxHeightVal = Math.min(height[l], height[r])
        const area = (r - l) * maxHeightVal
        maxWater = Math.max(maxWater, area)
        if (height[l] < height[r]) {
            l++
        } else {
            r--
        }
    }




    return maxWater
};
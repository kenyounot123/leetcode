/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let currentMax = 0;
    let l = 0
    let r = height.length - 1
    while (l < r) {
        if (height[l] < height[r]) {
            currentMax = Math.max(currentMax, height[l] * (r - l))
            l++
        } else {
            currentMax = Math.max(currentMax, height[r] * (r - l))
            r--
        }
    }
    return currentMax
};
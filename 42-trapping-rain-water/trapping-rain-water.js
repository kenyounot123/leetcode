/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    // inputs: height array of numbers
    // outputs: number that represents how much water is trapped 

    // how do we find how much water is trapped ?

    let l = 0
    let r = height.length - 1
    let lMax = 0
    let rMax = 0
    let waterTrapped = 0

    while (l < r) {
        if (height[l] < height[r]) {
            if(height[l] > lMax) {
                lMax = height[l]
            } else {
                waterTrapped += (lMax - height[l])
            }
            l++
        } else {
            if (height[r] > rMax) {
                rMax = height[r]
            } else {
                waterTrapped += rMax - height[r]
            }
            r--
        }

    }

    return waterTrapped
};
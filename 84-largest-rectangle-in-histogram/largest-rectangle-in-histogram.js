/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    let stack = []; //pairs of index and height
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        let start = i;
        // When current height is less than prev height
        while (stack.length !== 0 && stack[stack.length - 1][1] > heights[i]) {
            const [index, height] = stack.pop()
            maxArea = Math.max(maxArea, (height * (i - index)))
            start = index
        }
        stack.push([start, heights[i]])
    }
    for (let j = 0; j < stack.length; j++) {
        maxArea = Math.max(maxArea, stack[j][1] * (heights.length - stack[j][0]))
    }
    return maxArea
};
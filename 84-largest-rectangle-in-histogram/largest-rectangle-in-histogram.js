/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    // integer heights []
    // inputs: heights[] heights[i] is how tall it is , width is always 1
    // outputs: return largest rectangle ( area of rectangle )
    let maxArea = 0
    let stack = []
    heights.push(0)
    for (let i = 0; i < heights.length; i++) {
        let heightStart = i
        while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {
            const [pos, height] = stack.pop()
            maxArea = Math.max(maxArea, height * (i - pos))
            heightStart = pos
        }
        stack.push([heightStart, heights[i]])

    }

    return maxArea 
};
// [[1,1] , [2,2]]
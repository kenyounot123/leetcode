/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // inputs: temperatures = array of numbers
    // outputs: answer[]
    let answer = new Array(temperatures.length).fill(0)
    // O(n^2) 
    let stack = []
    for (let i = 0; i < temperatures.length; i++){
        // always decreasing stack => if we encounter a value that is bigger than
        // most recent stack value we have to keep popping till our stack is decreasing

        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const index = stack.pop()
            answer[index] = i - index
        }

        stack.push(i)
    }
    return answer
};
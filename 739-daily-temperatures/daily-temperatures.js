/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // inputs: temperatures nums[]
    // outputs: answer[] number of days you have to wait after ith day to get a warmer temperature
    // summarize: given an array of integers, for each index return the number (answer[i]) of days 
    // until we get a higher temperature

    // temperatures = [73,74,75,71,69,72,76,73]
    // so on 73 we need to push 1 to answer []
    // 74 we need to push 1 to answer
    // 75 we need to put 4
    
    let answer = new Array(temperatures.length).fill(0)
    let stack = []
    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop()
            answer[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }
    return answer
};
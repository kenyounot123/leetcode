/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    let answer = new Array(temperatures.length).fill(0);
    let stack = [];

    // we store the index of the temperature in the stack
    // that way we can calculate the # of days till we get a warmer temp by doing index - index of stack
    for (let i = 0; i < temperatures.length; i++) {
        // If stack is not empty and our temp is greater than the previous temp 
        while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            // Get previous temp index
            const index = stack.pop()
            // calculate # of days till we saw a warmer temp 
            answer[index] = i - index
        }
        stack.push(i)
    }
    return answer
};
    //O(n^2) BAD TOO SLOW
    // for (let i = 0; i < temperatures.length; i++) {
    //     let r = i;
    //     stack.length = 0;
    //     stack.push(temperatures[i])
    //     // For each index we want to loop till we find a number > than current index
    //     while (!(temperatures[r] > stack[0])) {
    //         r += 1
    //         if (r > temperatures.length) {
    //             answer.push(0) 
    //             break
    //         }
    //         if (temperatures[r] > stack[0]) {
    //             answer.push(stack.length)
    //         } else {
    //             stack.push(temperatures[r])
    //         }
    //     }
    // }
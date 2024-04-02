/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []
    for (let num of tokens) {
        let ans = 0;
        if (num !== "+" &&
            num !== "-" &&
            num !== "*" &&
            num !== "/") {
                stack.push(num)
        } else {
            if (num === "+") {
                ans = parseInt(stack[stack.length - 2]) + parseInt(stack[stack.length - 1])
                stack.pop()
                stack.pop()
                stack.push(ans)
            } else if (num === "-") {
                ans = parseInt(stack[stack.length - 2]) - parseInt(stack[stack.length - 1])
                stack.pop()
                stack.pop()
                stack.push(ans)
            } else if (num === "/") {
                ans = Math.trunc(parseInt(stack[stack.length - 2]) / parseInt(stack[stack.length - 1]))
                stack.pop()
                stack.pop()
                stack.push(ans)
            } else {
                ans = parseInt(stack[stack.length - 2]) * parseInt(stack[stack.length - 1])
                stack.pop()
                stack.pop()
                stack.push(ans)
            }
        }
    }
    return stack[0]
};
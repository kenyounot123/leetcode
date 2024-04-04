/**
 * @param {number} n
 * @return {string[]}
 */
 // 
var generateParenthesis = function(n) {
    let stack = [];
    let result = [];
    function putParenthesis(open, close, n)  {
        if (open === n && close === n) {
            result.push(stack.join(""))
            return
        }
        if (open < n) {
            stack.push("(")
            putParenthesis(open + 1, close, n)
            stack.pop()
        }
        if (close < open) {
            stack.push(")")
            putParenthesis(open , close + 1, n)
            stack.pop()
        }
    }

    putParenthesis(0, 0, n)
    return result
    
};

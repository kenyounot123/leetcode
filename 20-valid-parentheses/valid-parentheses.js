/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for (char of s) {
        if (char === "(" || char === "[" || char === "{") {
            stack.push(char)
        } else {
            if (stack.length === 0) {
                return false
            } else {
                const checkChar = stack.pop()
                if (checkChar + char === "()" || checkChar + char === "[]" || checkChar + char === "{}") {
                    continue;
                } else {
                    return false
                }
            }
        }
    }
    return !stack.length;
};
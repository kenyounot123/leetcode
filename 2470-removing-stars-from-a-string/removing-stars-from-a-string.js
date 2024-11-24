/**
 * @param {string} s
 * @return {string}
 */
var removeStars = function(s) {
    let stack = []
    for (const char of s) {
        if (char === "*") {
            stack.pop()
            continue
        }
        stack.push(char)
    }
    return stack.join("")
};
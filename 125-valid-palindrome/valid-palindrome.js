/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    s = s.toLowerCase()
    s = s.replace(/[^0-9a-zA-Z]/g, "")
    if (s === "") {
        return true
    }
    let l = 0
    let r = s.length - 1
    while (l < r) {
        if (s[l] === s[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true

    
};
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let newStrArr = s.split(" ").filter(word => word !== "")
    let l = 0
    let r = newStrArr.length - 1
    while (l < r) {
        const tmp = newStrArr[l]
        newStrArr[l] = newStrArr[r]
        newStrArr[r] = tmp
        l++
        r--
    }
    return newStrArr.join(" ")
};
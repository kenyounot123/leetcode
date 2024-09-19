/**
 * @param {string} s
 * @return {number}
 */
/*
    inputs: string s
    outputs: integer = the longest substring without repeating characteres
*/
var lengthOfLongestSubstring = function(s) {
    let freq = new Set()
    let l = 0
    let r = 0
    let maxLength = 0

    while (r < s.length) {
        if (!freq.has(s[r])) {
            maxLength = Math.max(maxLength, (r - l + 1))
            freq.add(s[r])
            r++
        } else {
            freq.delete(s[l])
            l++
        }
    }
    return maxLength
};
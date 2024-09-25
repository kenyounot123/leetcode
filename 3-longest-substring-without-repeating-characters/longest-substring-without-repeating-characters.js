/**
 * @param {string} s
 * @return {number}
 */
/*
    inputs: string s
    outputs: integer = the longest substring without repeating characteres
*/
var lengthOfLongestSubstring = function(s) {
    let l = 0
    let r = 0
    let longest = 0
    let freq = new Set()
    while (r < s.length) {
        while (freq.has(s[r])) {
            freq.delete(s[l])
            l++
        }
        freq.add(s[r])
        longest = Math.max(longest, r - l + 1)
        r++
    }
    return longest


};
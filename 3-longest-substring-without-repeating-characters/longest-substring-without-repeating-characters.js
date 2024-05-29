/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const chars = new Set();
    let l = 0;
    let max = 0;


    for (let r = 0; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l])
            l++
        }
        chars.add(s[r])
        max = Math.max(max, (r - l) + 1)
    }
    return max
   
};
//bbbb
//pwwkew
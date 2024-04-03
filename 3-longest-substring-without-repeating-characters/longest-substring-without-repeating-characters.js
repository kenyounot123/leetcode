/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let l = 0;
    let chars = new Set();
    let maxLength = 0;

    for (let r = 0; r < s.length; r++) {
        while (chars.has(s[r])) {
            chars.delete(s[l])
            l++
        }
        chars.add(s[r])
        maxLength = Math.max(maxLength, r - l + 1)
    }
    
    return maxLength;
};
//bbbb
//pwwkew
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    // inputs: s and k, s is a string and k is a number
    // outputs: return length of longest substring

    // summarize: given a string and a maximum of k replacements, can we replace k characters
    // in the string to get a substring that results in the longest substring.

    // if k === s.length then the longest substring is s.length
    let maxLength = 0;
    let countMax = 0
    let counts = new Map()

    let l = 0;
    let r = 0;
    // initialize two pointers l and right 
    while (r < s.length) {
        counts.set(s[r], (counts.get(s[r]) || 0) + 1)
        countMax = Math.max(countMax, counts.get(s[r])) 

        while((r - l) + 1 - countMax > k) {
            counts.set(s[l], counts.get(s[l]) - 1)
            l++
        }

        maxLength = Math.max(maxLength, r - l + 1)
        r++
    }

    return maxLength
};
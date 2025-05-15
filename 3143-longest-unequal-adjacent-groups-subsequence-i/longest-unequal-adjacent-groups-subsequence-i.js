/**
 * @param {string[]} words
 * @param {number[]} groups
 * @return {string[]}
 */
var getLongestSubsequence = function(words, groups) {
    // Inputs: two arrays, one binary array and a string array
    // outputs: return the array of chars with the longest length that fulfill the requirements
    
    let ans = []
    let last = -1

    for (let i = 0; i < groups.length; i++) {
        if (groups[i] !== last) {
            ans.push(words[i])
            last = groups[i]
        }
    }

    return ans
};
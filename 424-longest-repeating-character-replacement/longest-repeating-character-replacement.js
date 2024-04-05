/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let l = 0;
    let char = {}
    // We need something to store the count of our letters to see which letter to replace
    // For instance "BAAABB" k = 2 Should we replace A or B ?
    // We want to replace A since there are more B's so replacing A would give us a longer length 
    // So always replace the letter with lower count
    for (let r = 0; r < s.length; r++) {
        char[s[r]] = (char[s[r]] + 1) || 1 
        const counts = Object.values(char)
        while (((r - l + 1) - Math.max(...counts)) > k) {
            char[s[l]] -= 1
            l++   
        }
        max = Math.max(max, r - l + 1)
    }
    return max
}
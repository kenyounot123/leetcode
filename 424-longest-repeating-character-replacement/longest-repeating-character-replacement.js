/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {
    let max = 0;
    let l = 0;
    let char = {}
    let valueMax = 0;
    // We need something to store the count of our letters to see which letter to replace
    // For instance "BAAABB" k = 2 Should we replace A or B ?
    // We want to replace A since there are more B's so replacing A would give us a longer length 
    // So always replace the letter with lower count
    for (let r = 0; r < s.length; r++) {
        char[s[r]] = (char[s[r]] + 1) || 1 // If char is not in hash map then initialize it with a value of 1
        valueMax = Math.max(valueMax, char[s[r]]) // Get the max of counts 
        
        // Determines if our 'window' is 'valid' or not 
        // A valid window means that if I do k replacements in that window,
        // the whole window is going to be all the same letters and our longest string
        while (((r - l + 1) - valueMax) > k) { 
            char[s[l]] -= 1
            l++   
        }
        max = Math.max(max, r - l + 1)
    }
    return max
}
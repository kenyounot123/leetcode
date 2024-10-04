/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // inputs: s1 and s1 strings
    // outputs: we want to return a boolean 
    // summarize: given two strings s1 and s2 we want tocheck if s2 contains a permutation
    // of s1, if it does return true, if it doesnt return false

    // what if s1 is larger than s2 ? we should just return false
    // if its eqaul, we check if they have the number of characters 
    
    if (s1.length > s2.length) return false;

    let freqS1 = new Map();
    for (let char of s1) {
        freqS1.set(char, (freqS1.get(char) || 0) + 1);
    }

    let l = 0;
    let r = 0;
    let requiredSize = s1.length;

    while (r < s2.length) {
        // If the character is in s1, decrease the required size
        if (freqS1.get(s2[r]) > 0) requiredSize--;
        freqS1.set(s2[r], (freqS1.get(s2[r]) || 0) - 1); // Decrease frequency of s2[r]
        r++;

        // Check if all characters have been matched
        if (requiredSize === 0) return true;

        // If the window size exceeds s1.length, move the left pointer
        if (r - l === s1.length) {
            if (freqS1.get(s2[l]) >= 0) requiredSize++; // Adjust requiredSize if needed
            freqS1.set(s2[l], (freqS1.get(s2[l]) || 0) + 1); // Increase frequency for s2[l]
            l++; // Move left pointer
        }
    }

    return false;

};
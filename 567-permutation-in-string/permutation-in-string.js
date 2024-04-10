/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // Intuition :
    // Loop through s2 and initializing both left and right pointers at 0
    // our window that we will be checking is the length of s1
    // everytime our window is false we will slide it over by 1 
    // Window is false if !== s1 (can just look at character counts)
    // Approach: 
    // Create a hashmap of s1 first to determine what characters are needed when looking at permutations of s1
    // The required length of our valid window must also be === s1.length
    // On each iteration of our right pointer we ask "Does our window have this char already ?"
    // Edge cases:
    // When sliding our window over by 1 we might also have slided one of our characters that were required
    // So we must return our checking condition back to normal if this happens.
    // For example "hello" "orlleho"

    // if length of s1 > s2 then automatically return false.
    if (s1.length > s2.length) return false;

    let neededChars = {}
    for (letter of s1) {
        neededChars[letter] = (neededChars[letter] || 0) + 1
    }
    let l = 0;
    let r = 0;
    let requiredLength = s1.length
    while (r < s2.length) {
        if (neededChars[s2[r]] > 0) requiredLength--;
        neededChars[s2[r]]--
        r++
        if (requiredLength === 0) return true;
        if (r - l === s1.length) {
            if (neededChars[s2[l]] >= 0) requiredLength++;
            neededChars[s2[l]]++
            l++
        }
    }
    return false;
};
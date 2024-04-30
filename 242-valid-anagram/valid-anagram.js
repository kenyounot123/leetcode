/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
// Initial approach: iterate through s and t and store number of characters in 
// a hashmap.
// Compare hashmap if they are the same then return true, if not, return false.

// OR
// Since they are all english letters, can initialize an array of all 26 letters
    if (s.length !== t.length) {
        return false
    }
    let chars = new Map()

    for (c of s) {
        chars.set(c, (chars.get(c) || 0) + 1)
    }
    for (c of t) {
        if (!chars.has(c) || chars.get(c) === 0) {
            return false
        }
        chars.set(c, (chars.get(c) - 1))
    }
    return true

};
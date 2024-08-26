/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
/*
Given two strings s and t
    
return true if t is an anagram of s

return false otherwise

word or phrase formed by rearranging the letters of a different word or phrase
typically using all the original letters exactly once.

s and t consist of lowercase English letters.

Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

example 1:
    s = anagram , t = nagaram
    first check s string then check t string O(m + n) where m,n is the length of s and t
    iterate through s and get the counts of each letter store it in a hashmap with the key as the letter and count as the value

    check hashmap if all values are 0 return true, false otherwise
*/
var isAnagram = function(s, t) {
    if (s.length != t.length) {
        return false
    }
    let counts = new Map()
    for (char of s) {
        if (counts.has(char)) {
            counts.set(char, counts.get(char) + 1)
        } else {
            counts.set(char, 1)
        }
    }
    for (char of t) {
        if (counts.has(char)) {
            counts.set(char, counts.get(char) - 1)
        } else {
            return false
        }
    }
    for (val of counts.values()) {
        if (val != 0) {
            return false
        }
    }
    return true
};
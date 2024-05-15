/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let hash = new Map()
    let res = []
    for (let word of strs) {
        const sortedWord = word.split("").sort().join("")
        if (hash.has(sortedWord)) {
            hash.get(sortedWord).push(word)
        } else {
            hash.set(sortedWord, [word])
        }
    }
    for (const value of hash.values()) {
        res.push(value)
    }
    return res
};
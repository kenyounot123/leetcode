/**
 * @param {string} s1
 * @param {string} s2
 * @return {string[]}
 */
var uncommonFromSentences = function(s1, s2) {
    const freq = new Map()
    const words1 = s1.split(" ")
    const words2 = s2.split(" ")
    let output = []

    for (let word of words1) {
        freq.set(word, (freq.get(word) || 0) + 1)
    }

    for (let word of words2) {
        if (freq.get(word) > 1) {
            freq.set(word, 0)
        }
        if (!freq.has(word)) {
            freq.set(word, 1)
        } else {
            freq.set(word, (freq.get(word) || 0) - 1)
        }
    }

    for (const [key, val] of freq) {
        if (val === 1) {
            output.push(key)
        }
    }

    return output 
};
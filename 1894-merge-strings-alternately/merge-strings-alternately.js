/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let mergedWord = ""
    let l = 0
    let r = 0
    while (l < word1.length && r < word2.length) {
        mergedWord += word1[l]
        mergedWord += word2[r]
        l++
        r++
    }
    if (l < word1.length) {
        for (let i = l; i < word1.length; i++) {
            mergedWord += word1[i]
        }
    }
    if (r < word2.length) {
        for (let i = r; i < word2.length; i++) {
            mergedWord += word2[i]
        }
    }

    return mergedWord
};
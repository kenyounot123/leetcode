/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const numOfLongerWord = Math.max(word1.length, word2.length)
    let mergedWord = ""
    for (let i = 0; i < numOfLongerWord; i++) {
        if (word1[i]) {
            mergedWord += word1[i]
        } else {
            mergedWord += ""
        }
        if (word2[i]) {
            mergedWord += word2[i]
        } else {
            mergedWord += ""
        }
    }
    return mergedWord
};
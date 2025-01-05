/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    longerWord = word1.length > word2.length ? word1 : word2
    mergedStr = ""

    for(let i = 0; i < longerWord.length; i++) {
        if (word1[i]) {
            mergedStr += word1[i]
        }
        if (word2[i]) {
            mergedStr += word2[i]
        }
    }

    return mergedStr
};
# @param {String} word1
# @param {String} word2
# @return {String}
def merge_alternately(word1, word2)
    longerWord = [word1.length, word2.length].max
    mergedWord = ""
    for index in 0...longerWord do
        mergedWord += word1[index] if index < word1.length
        mergedWord += word2[index] if index < word2.length
    end
    mergedWord
end
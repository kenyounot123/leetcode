# @param {String} word1
# @param {String} word2
# @return {String}
def merge_alternately(word1, word2)
    # Inputs: word1 and word2, strings
    # output: 1 merged string
    result = ""
    longest_word_length = [word1.size, word2.size].max
    (0..longest_word_length).each do |i|
        result << word1[i] if word1[i]
        result << word2[i] if word2[i]
    end
    result
end
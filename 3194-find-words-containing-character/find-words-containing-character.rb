# @param {String[]} words
# @param {Character} x
# @return {Integer[]}
def find_words_containing(words, x)
    # Inputs: x -> character
            # words -> array of strings
    # Outputs: result -> array of INDICES representing the words that contain charcter x

    # words array is <= 50 -> brute force wouldnt be bad
    # x is any of the 26 english letters
    # edge cases: -> check for when words is length 1 
            # does word include x ? 
            # yes -> push the current index to results
            # no -> next
    results = []

    words.each_with_index do |word, idx|
        next unless word.include?(x)
        results.push(idx)
    end

    results
end
class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        # Input: words list str[]
        # output: integer denoting the number of pairs (i, j) s.th words[i] and words[j] is both prefix and suffix
        def isPrefixAndSuffix(word1, word2):
            # takes in two strings as inputs
            # output: returns boolean true or false if word1 is both prefix and suffix of word2
            word_len = len(word1)
            if len(word1) > len(word2):
                return False
            else:
                return word2[:word_len] == word1 and word2[-word_len:] == word1

        outputs = 0
        for i in range(len(words)):
            for j in range(i + 1,len(words)):
                if i > j:
                    return outputs
                elif isPrefixAndSuffix(words[i], words[j]):
                    outputs += 1
                else:
                    continue
        return outputs

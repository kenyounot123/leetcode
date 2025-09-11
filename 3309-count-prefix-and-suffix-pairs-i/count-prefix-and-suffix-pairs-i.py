class Solution:
    def countPrefixSuffixPairs(self, words: List[str]) -> int:
        # Input: words list str[]
        # output: integer denoting the number of pairs (i, j) s.th words[i] and words[j] is both prefix and suffix

        pairs = 0
        

        for i in range(len(words)):
            for j in range(1, len(words)):
                if words[j].startswith(words[i]) and words[j].endswith(words[i]) and i < j:
                    pairs += 1


        return pairs
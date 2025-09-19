class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        stack = []
        output = []

        if len(words) == 1:
            return words

        stack.append("".join(sorted(words[0])))
        output.append(words[0])

        for i in range(1, len(words)):
            word = "".join(sorted(words[i]))
            if stack[-1] != word:
                output.append(words[i])
                stack.append(word)
        
        return output

            
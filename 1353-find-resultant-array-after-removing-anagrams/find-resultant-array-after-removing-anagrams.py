class Solution:
    def removeAnagrams(self, words: List[str]) -> List[str]:
        def are_anagrams(s1: str, s2: str) -> bool:
            count = [0] * 26
            for c in s1:
                count[ord(c) - ord('a')] += 1
            for c in s2:
                count[ord(c) - ord('a')] -= 1
            return all(c == 0 for c in count)

        i = 1
        while i < len(words):
            if are_anagrams(words[i-1], words[i]):
                del words[i]
            else:
                i += 1
        return words

            
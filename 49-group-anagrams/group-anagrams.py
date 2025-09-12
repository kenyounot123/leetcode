class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # anagram if the freq count of the str is the same
        # maps 
        freq = {}
        for s in strs:
            key = "".join(sorted(s))
            if key in freq:
                freq[key].append(s)
            else:
                freq[key] = [s]

        return list(freq.values())
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # anagram if the freq count of the str is the same
        # maps 
        freq = {}
        for word in strs:
            if "".join(sorted(word)) in freq:
                freq["".join(sorted(word))].append(word)
            else:
                freq["".join(sorted(word))] = [word]
        
        return list(freq.values())
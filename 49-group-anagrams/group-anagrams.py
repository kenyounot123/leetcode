class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # anagram if the freq count of the str is the same
        # maps 
        freq = {}
        output = []
        for s in strs:
            if "".join(sorted(s)) in freq:
                freq["".join(sorted(s))].append(s)
            else:
                freq["".join(sorted(s))] = [s]
        
        for k,v in freq.items():
            output.append(v)
        return output
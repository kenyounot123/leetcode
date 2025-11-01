class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        
        anagrams = {}

        for idx,s in enumerate(strs):
            if "".join(sorted(s)) in anagrams:
                anagrams["".join(sorted(s))].append(s)
            else:
                anagrams["".join(sorted(s))] = [s]



        return list(anagrams.values())
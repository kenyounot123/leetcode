class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # inputs: strs[] list of strs
        # outputs: the longest common prefix or "" if none
        
        compare_s = strs[0]
        
        longest_pref_len = min(len(s) for s in strs)

        for i in range(longest_pref_len):
            char = compare_s[i]
            for j in range(1,len(strs)):
                if strs[j][i] == char:
                    continue
                else:
                    return compare_s[:i]
        return compare_s[:longest_pref_len]

        


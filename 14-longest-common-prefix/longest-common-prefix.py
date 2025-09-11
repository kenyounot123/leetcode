class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # inputs: strs[] list of strs
        # outputs: the longest common prefix or "" if none
        
        # array can never be empty

        compare_s = strs[0]

        max_pref_len = min(len(s) for s in strs)

        for i in range(max_pref_len):
            pref = compare_s[i]

            for j in range(1, len(strs)):
                if pref == strs[j][i]:
                    continue
                else:
                    return compare_s[0:i]

        return compare_s[:max_pref_len]


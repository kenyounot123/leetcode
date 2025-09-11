class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # inputs: strs[] list of strs
        # outputs: the longest common prefix or "" if none
        pref = strs[0]
        pref_len = len(strs[0])
        for s in strs[1:]:
            while pref != s[0:pref_len]:
                pref_len -= 1
                if pref == 0:
                    return ""
                pref = pref[0:pref_len]
        return pref

            

        


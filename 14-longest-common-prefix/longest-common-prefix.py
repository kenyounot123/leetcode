class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        # inputs: strs[] list of strs
        # outputs: the longest common prefix or "" if none
        
        # array can never be empty
        prefix = strs[0]
        prefix_len = len(prefix)

        for word in strs[1:]:
            while prefix != word[:prefix_len]:
                prefix_len -= 1
                prefix = prefix[:prefix_len]
                if prefix_len == 0:
                    return ""
        return prefix





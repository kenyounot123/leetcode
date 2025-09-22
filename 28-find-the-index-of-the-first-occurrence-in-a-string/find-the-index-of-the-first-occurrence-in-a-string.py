class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        l = 0
        for r in range(len(haystack)):
            if (r - l) + 1 == len(needle):
                if haystack[l:r + 1] == needle:
                    return l
                else:
                    l += 1
        return -1
        
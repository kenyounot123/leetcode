

class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) == 1:
            return True
        s = s.lower()
        l = 0
        r = len(s) - 1
        while (l < r):
            if not s[l].isalnum():
                l += 1
            elif not s[r].isalnum():
                r -= 1
            elif not s[l] == s[r]:
                return False
            else:
                l += 1
                r -= 1
        return True
        





class Solution(object):
    def isPalindrome(self, s):
        """
        :type s: str
        :rtype: bool
        """
        if len(s) == 1:
            return True
        s = s.lower()
        new = ""
        for char in s:
            if char.isalnum():
                new += char
        if new == new[::-1]:
            return True
        return False


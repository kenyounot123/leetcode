class Solution:
    def isPalindrome(self, x: int) -> bool:
        # inputs: integer x
        # outputs: boolean true or false whether x is a palindrome or not
        # What is a palindrome? left to right == right to left
        l = 0
        x_list = list(str(x))
        r = len(x_list) - 1
        while l <= r:
            if x_list[l] == x_list[r]:
                l += 1
                r -= 1
            else:
                return False
        return True
            
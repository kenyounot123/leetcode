class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        # inputs: 2 strings 
        # outputs: sum of those 2 strings as a string
        # no string to int conversion
        # convert string to ascii to get an integer val
        l = len(num1) - 1
        r = len(num2) - 1
        output = ""
        carry = 0
        while l >= 0 or r >= 0 or carry:
            d1 = ord(num1[l]) - ord("0") if l >= 0 else 0
            d2 = ord(num2[r]) - ord("0") if r >= 0 else 0
            total = d1 + d2 + carry
            remainder = total % 10
            carry = total // 10
            output += str(remainder)

            l -= 1
            r -= 1

        return output[::-1]
        



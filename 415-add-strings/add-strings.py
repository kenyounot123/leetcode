class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        # inputs: 2 strings 
        # outputs: sum of those 2 strings as a string
        # no string to int conversion
        # convert string to ascii to get an integer val
        ans = ""
        carry = 0
        l = 0
        r = 0
        r1 = num1[::-1]
        r2 = num2[::-1]
        # "321"
        # "11"
        while l < len(num1) or r < len(num2) or carry:
            d1 = ord(r1[l]) - ord("0") if l < len(num1) else 0
            d2 = ord(r2[r]) - ord("0") if r < len(num2) else 0
            total = d1 + d2 + carry
            carry = total // 10
            remainder = total % 10

            ans += str(remainder)
            l += 1
            r += 1

        

        return ans[::-1]



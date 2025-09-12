class Solution:
    def isValid(self, s: str) -> bool:
        # given a string as input
        # output return a boolean true of false if its a valid string
        stack = []

        for char in s:
            if char == "(" or char == "{" or char == "[":
                stack.append(char)
                continue
            if len(stack) == 0:
                return False
            if ((stack[-1] == "(" and char == ")") or
                (stack[-1] == "[" and char == "]") or
                (stack[-1] == "{" and char == "}")):
                stack.pop()
            else:
                return False

        return len(stack) == 0
                

        
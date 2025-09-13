class Solution:
    def isValid(self, s: str) -> bool:
        # given a string as input
        # output return a boolean true of false if its a valid string
        stack = []
        for char in s:
            if char == "[" or char == "(" or char == "{":
                stack.append(char)
                continue
            if ((len(stack) == 0) and (char == "]" or char == "}" or char == ")")):
                return False
            else:
                curr_char = stack.pop()
                if ((curr_char == "[" and char == "]") or
                    (curr_char == "{" and char == "}") or
                    (curr_char == "(" and char == ")")):
                    continue
                else:
                    return False
        return len(stack) == 0



        
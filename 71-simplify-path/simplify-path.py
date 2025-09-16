class Solution:
    def simplifyPath(self, path: str) -> str:
        stack = []
    
        new_arr = path.split("/")
        for c in new_arr:
            if c == "" or c == ".":
                continue
            if c == "..":
                if stack:
                    stack.pop()
            else:
                stack.append(c)

        return "/" + "/".join(stack)

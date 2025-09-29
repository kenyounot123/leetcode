class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # Given n pair of parentheses
        # return all combinations of well formed parethesis

        output = []
        
        def dfs(open_p, close_p, s):
            if open_p == close_p and open_p + close_p == n * 2:
                output.append(s)
                return
            
            if open_p < n:
                dfs(open_p + 1, close_p, s + "(")
            if close_p < open_p:
                dfs(open_p, close_p + 1, s + ")")
        
        dfs(0,0,"")


        return output
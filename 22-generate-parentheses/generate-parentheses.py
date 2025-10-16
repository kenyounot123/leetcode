class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        # Given n pair of parentheses
        # generate all combinations => recursion

        result = []

        def dfs(s, open, close):
            if open + close == n * 2:
                result.append(s)
            
            if open < n:
                dfs(s + "(", open + 1, close)
            if close < open:
                dfs(s + ")", open, close + 1)
            
            

        dfs("", 0,0)


        return result


        
        
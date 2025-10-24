# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        

        def dfs(node):
            if node is None:
                return [True, 0]
            
            left_subtree = dfs(node.left)
            right_subtree = dfs(node.right)

            is_balanced = left_subtree[0] and right_subtree[0] and abs(left_subtree[1] - right_subtree[1]) <= 1

            return [is_balanced, max(left_subtree[1], right_subtree[1]) + 1]
        

        return dfs(root)[0]
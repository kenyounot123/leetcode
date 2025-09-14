# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def diameterOfBinaryTree(self, root: Optional[TreeNode]) -> int:
        self.diameter = 0
        
        def dfs(node):
            if node is None:
                return
            left_tree = dfs(node.left) if node.left else 0
            right_tree = dfs(node.right) if node.right else 0
            self.diameter = max(self.diameter, left_tree + right_tree)
    
            return 1 + max(left_tree, right_tree)
        
        dfs(root)

        return self.diameter
        

        
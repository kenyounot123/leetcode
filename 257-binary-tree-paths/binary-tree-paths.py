# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def binaryTreePaths(self, root: Optional[TreeNode]) -> List[str]:
        # inputs: a binary tree
        # outputs: the paths from root to leaf
        result = []
        def dfs(node, path, result):
            if node is None:
                return
            
            path += str(node.val)

            if node.left is not None:
                dfs(node.left, path + "->", result)
            if node.right is not None:
                dfs(node.right, path + "->", result)
            
            if node.left is None and node.right is None:
                result.append(path)


        
        dfs(root, "", result)

        return result








            
        
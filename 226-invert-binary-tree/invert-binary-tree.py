# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def invertTree(self, root: Optional[TreeNode]) -> Optional[TreeNode]:
        # input: root of a binary tree
        # output: invert and return root

        if root is None:
            return

        self.invertTree(root.left)
        self.invertTree(root.right)

        tmp = root.right
        root.right = root.left
        root.left = tmp

        return root


        
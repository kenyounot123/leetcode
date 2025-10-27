# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isSubtree(self, root: Optional[TreeNode], subRoot: Optional[TreeNode]) -> bool:

        def isSameTree(p, q):
            if not p and not q:
                return True
            
            if p is None and q is not None:
                return False
            
            if q is None and p is not None:
                return False

            if p.val == q.val:    
                left = isSameTree(p.left, q.left)
                right = isSameTree(p.right, q.right)
                return left and right
            else:
                return False
        
        def checkTrees(p, q):
            if p is None:
                return False
            
            if isSameTree(p,q):
                return True
            
            return checkTrees(p.left, q) or checkTrees(p.right, q)

        return checkTrees(root,subRoot)
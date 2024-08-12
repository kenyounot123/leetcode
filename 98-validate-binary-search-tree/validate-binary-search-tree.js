/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // Checking if a tree is a BST
    // need to check if left subtree of a node is less than the node's key
    // need to check if right subtree is greater than the node's key
    // by default if this is true then both left and right subtrees are also BST 

    // So given the root node, we can recursively traverse the left side while checking if it is less than the node
    //    depth first search if node is null that means we have reached the end of the left subtrees
    const dfs = (node, min, max) => {
        if (!node) {
            return true
        }
        if (node.val <= min || node.val >= max) return false;

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)
    }

    return dfs(root, -Infinity, Infinity)
    


};


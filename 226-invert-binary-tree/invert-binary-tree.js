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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // recursively go traverse tree depth first
    // while doing so, invert node.right and node.left
    if (!root) {
        return null
    }

    invertTree(root.left)
    invertTree(root.right)
    
    const tmp = root.left
    root.left = root.right
    root.right = tmp
    return root
};
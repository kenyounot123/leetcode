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
 * @return {number}
 */
var goodNodes = function(root) {
    // Preorder traversal
    let count = 0;
    const dfs = (node, max) => {
        
        if (!node) {
            return 0
        }
        if (node.val >= max) {
            count += 1
            max = Math.max(max, node.val)
        }
        dfs(node.right, max)
        dfs(node.left, max)

    }
    dfs(root, root.val)
    return count
};
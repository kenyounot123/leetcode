/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    // Get base case by thinking about the root node 
    // So if p and q are both null then they are the same tree return true
    if (!p && !q) {
        return true
    } else if (!p || !q || p.val !== q.val) {
        return false
    }

    let left = isSameTree(p.left, q.left)
    let right = isSameTree(p.right, q.right)
    return left && right
};
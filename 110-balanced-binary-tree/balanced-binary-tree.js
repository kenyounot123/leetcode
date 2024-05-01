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
var isBalanced = function(root) {

    const dfs = (root) => {
        if (!root) {
            return [true,0]
        }
        let left = dfs(root.left)
        let right = dfs(root.right)
        const balanced = (Math.abs(right[1] - left[1]) <= 1) && left[0] && right[0]
        return [balanced, 1 + Math.max(left[1], right[1])]
    }
    return dfs(root)[0]
    
};
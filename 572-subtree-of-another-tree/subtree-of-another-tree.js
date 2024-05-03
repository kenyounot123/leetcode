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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function(root, subRoot) {
    const sameTree = (s, t) => {
        if (!s && !t) {
            return true
        } 
        if (s && t && s.val === t.val) {
            let left = sameTree(s.left, t.left)
            let right = sameTree(s.right, t.right)
            return (left && right)
        }
    }

    if (!subRoot) {
        return true
    } else if (!root && subRoot) {
        return false
    }
    if (sameTree(root, subRoot)) {
        return true
    }
    let left = isSubtree(root.left, subRoot)
    let right = isSubtree(root.right, subRoot)
    return left || right
};
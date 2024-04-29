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
var maxDepth = function(root) {
    // Iterative DFS
    // if (!root) return 0

    // let stack = [{node: root, level: 1}]
    // let depth = 0

    // while (stack.length > 0) {
    //     const { node, level } = stack.pop()
    //     depth = Math.max(depth, level)

    //     if (node.left) stack.push({node: node.left, level: level + 1})
    //     if (node.right) stack.push({node: node.right, level: level + 1})
    // }

    // return depth

    // Recursive depth first search
    if (!root) {
        return 0
    }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)

    return 1 + Math.max(left, right)

};
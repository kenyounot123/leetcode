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
 * @return {number[]}
 */
var rightSideView = function(root) {
    // Intuition: bfs but only for the right side ?
    // right side is just when i = qlen - 1 ***
    let result = []
    let queue = [root]
    while (queue[0]) {
        const qlen = queue.length
        for (let i = 0; i < qlen; i++) {
            const curr = queue.shift()
            if (i === qlen - 1) result.push(curr.val)
            if (curr.left) queue.push(curr.left)
            if (curr.right) queue.push(curr.right)
        }
    }
    return result

};
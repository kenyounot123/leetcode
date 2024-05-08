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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    // Breath first search
    // Use a queue 
    let result = []
    let queue = [root]
    while (queue[0]) {
        const row = []
        const qlen = queue.length
        for(let i = 0; i < qlen; i++) {
            const current = queue.shift() 
            row.push(current.val)
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        result.push(row)
    }
    return result
};
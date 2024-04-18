/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let nodes = new Map()
    if (!head) {
        return null
    }
    let curr = head;
    while (curr) {
        nodes.set(curr, new Node(curr.val, null, null))
        curr = curr.next
    }
    curr = head;

    while (curr) {
        nodes.get(curr).next = nodes.get(curr.next) || null
        nodes.get(curr).random = nodes.get(curr.random) || null
        curr = curr.next
    }
    console.log(nodes)
    return nodes.get(head)
};
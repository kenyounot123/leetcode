/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//  rverse the list iteratively and recursively
// 1 -> 2 -> 3 -> 4 -> 5

var reverseList = function(head) {

    // null <- 1 2 -> 3
    //         ^ ^
    let prev = null
    let current = head

    while (current) {
        const tmp = current.next
        current.next = prev
        prev = current
        current = tmp
    }
    return prev
    
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head) // dummy -> 1-> 2 ...
    let left = dummy
    let right = head
    while (n > 0 && right !== null) {
        right = right.next
        n -= 1
    }

    while (right !== null) {
        left = left.next
        right = right.next
    }

    left.next = left.next.next
    return dummy.next
};
// 1 2 3 4 5
// 0 1 2 3 4 5 null
// L     R
//   L     R
//     L     R
//       L      R
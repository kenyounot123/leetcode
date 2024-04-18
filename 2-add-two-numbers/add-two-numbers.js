/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    // Approach: Can just start adding from l1 and l2 because we add the singles place first anyways when we add. 
    // Problem: A lot of edge cases. 
    let dummy = new ListNode()
    let curr = dummy
    let carry = 0;
    while (l1 || l2 || carry) {
        const val1 = (l1) ? l1.val : 0;
        const val2 = (l2) ? l2.val : 0;

        const value = val1 + val2 + carry
        carry = Math.floor(value / 10)
        const newVal = value % 10
        curr.next = new ListNode(newVal)

        curr = curr.next
        l1 = l1 ? l1.next : null
        l2 = l2 ? l2.next : null
    }
    return dummy.next
};
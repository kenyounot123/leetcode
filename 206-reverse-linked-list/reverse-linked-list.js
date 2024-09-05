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
var reverseList = function(head) {
    // traverse the list till the end
    // while traversing, reverse the nodes 

    // at 1, what are my actions ? 
    // create a temp node 2 , then set 1.next = prev
    // at 2 what are my actions

    // iteratively we can use pointers
    /*
    let prev = null
    let current = head
    while (current) {
        const next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
    */

    if (!head) {
        return null 
    }
    let newHead = head
    if (head.next) {
        newHead = reverseList(head.next)
        head.next.next = head
    }
    head.next = null 
    return newHead



};
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
// head next

var reverseList = function(head) {
    /* iteratively w 2 pointers
    let current = head 
    let prev = null

    while (current) {
        const next = current.next
        current.next = prev
        prev = current 
        current = next 
    }
    return prev
    */
    
    // 1 -> 2 
    // base case
    // if head is null then we return null
    // recursive step


    if (!head) {
        return null
    }
    let newHead = head
    if (head.next) {
        newHead = reverseList(head.next)
        head.next.next = head
        head.next = null
    }
    return newHead
     

};
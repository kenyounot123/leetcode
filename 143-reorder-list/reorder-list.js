/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    // Using example 2
    let slow = head // 1
    let fast = head.next // 2
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    // Reverse the link of the second half
    let second = slow.next 
    slow.next = null // Breaking link between 2 -> 3 becomes 2 -> null
    let prev = slow.next // Storing null as prev

    while (second) { 
        let temp = second.next // create temp pointer for 4
        second.next = prev // 3 -> null, 4 -> 3, 5 -> 4
        prev = second // prev = 3
        second = temp // 3 = 4   
    }

    //Merge two halves
    let first = head
    second = prev
    while(second) {
        let tmp1 = first.next
        let tmp2 = second.next
        first.next = second
        second.next = tmp1
        first = tmp1
        second = tmp2
    }
};  
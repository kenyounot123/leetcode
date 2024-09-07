/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
//  input: list1, list2, both sorted and linked lists
// output: 1 list sorted
// both lists are sorted 
// edge case: what if 1 list is longer than the other ?
// what if list is empty?
// [1,2,4]
// t
// [1,3]
var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode()
    let tail = dummy 
    while(list1 && list2) {
        if (list1.val < list2.val) {
            tail.next = list1
            tail = list1
            list1 = list1.next
        } else {
            tail.next = list2
            tail = list2
            list2 = list2.next
        }
    }
    if (list1) {
        tail.next = list1
    } else if (list2) {
        tail.next = list2
    }
    return dummy.next
}
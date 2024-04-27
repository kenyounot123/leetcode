/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {

    dummy = new ListNode(0, head)
    groupPrev = dummy
    while (true) {
        let kth = getKth(groupPrev, k)
        if (!kth) {
            break
        }
        groupNext = kth.next

        //reverse group
        let prev = kth.next
        let curr = groupPrev.next
        while (curr !== groupNext) {
            const tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        }

        // set new groupPrev after reversing the group
        // For instance: groupPrev -> 1 -> 2 -> 3 ( k = 3 so this is one group )
        // New groupPrev will be set to 3 but we remember the 1 so that we can set its next to the new groups first 
        // node.
        const tmp = groupPrev.next
        groupPrev.next = kth
        groupPrev = tmp
    }
    return dummy.next


};

const getKth = (curr, k) => {
    let current = curr
    while (current && k > 0) {
        current = current.next
        k -= 1
    }
    return current
}

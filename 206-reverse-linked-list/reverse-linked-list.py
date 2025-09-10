# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # input: head of a singly linked list
        # output: head of the reversed list

        # base case:
        if not head:
            return

        # reverseList(None)
        #      |
        # reverseList(2)
        #      |
        # reverseList(1)
        new_head = head
        if head.next:
            # recursive step
            new_head = self.reverseList(head.next)
            # everything after the recursive step you can think of it is what the node before it has access to
            head.next.next = head
        head.next = None
        return new_head

        
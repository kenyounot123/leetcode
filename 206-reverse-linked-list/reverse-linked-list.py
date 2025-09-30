# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # input: head of a singly linked list
        # output: head of the reversed list
        if head is None:
            return
        if head and head.next is None:
            return head
        
        if head.next:
            new_head = self.reverseList(head.next)
            head.next.next = head
            head.next = None
        
        return new_head

        # return prev

        
            
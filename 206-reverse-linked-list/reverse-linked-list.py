# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # input: head of a singly linked list
        # output: head of the reversed list
        # if head is None:
        #     return None
        
        # if head.next:
        #     new_head = self.reverseList(head.next)

        #     new_head.next = head
        #     head.next = None
        #     return head

        if head is None:
            return None
        
        prev = None
        curr = head
        while curr:
            tmp = curr.next
            curr.next = prev
            prev = curr
            curr = tmp
        
        return prev

        
            
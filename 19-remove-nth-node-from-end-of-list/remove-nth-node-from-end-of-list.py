# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # given head of linked list and an integer n
        # return head of linked list after removing nth node FROM THE END of the list
        # to remove nodes we want to do head.next = head.next.next
        # so as long as we find the node right before the nth node from the end
        # we can remove easily.

        result = ListNode(0, head)
        dummy = result

        for _ in range(n):
            head = head.next
        
        while head:
            head = head.next
            dummy = dummy.next
        
        dummy.next = dummy.next.next

        return result.next

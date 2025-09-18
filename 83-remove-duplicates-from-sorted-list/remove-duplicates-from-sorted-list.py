# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # inputs: head of sorted linked list
        # output: head of the sorted list after deletion of duplicates
        if head is None:
            return None
        
        current = head
        # 1,1,1,1,2
        while current and current.next:
            if current.next.val == current.val:
                current.next = current.next.next
            else:
                current = current.next

        return head

        
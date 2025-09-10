# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        # Inputs: 2 linked lists
        # Outputs: 1 linked list that has been formed by merging the two and sorted

        head = ListNode()
        current = head
        
        while list1 and list2:
            if list1.val <= list2.val:
                current.next = list1
                list1 = list1.next
            else:
                current.next = list2
                list2 = list2.next

            current = current.next
        
        if list1 and list2 is None:
            current.next = list1
        else:
            current.next = list2

        
        return head.next

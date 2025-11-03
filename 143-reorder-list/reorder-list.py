# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def reorderList(self, head: Optional[ListNode]) -> None:
        """
        Do not return anything, modify head in-place instead.
        """
        # [1,2,3,4]
        # [1,4,2,3]
        slow = head
        fast = head

        while fast and fast.next:
            slow = slow.next
            fast = fast.next.next
        
        second = slow.next
        slow.next = None
        prev = None

        while second:
            tmp = second.next
            second.next = prev

            prev = second
            second = tmp
        
        first = head
        second = prev

        # [ 1, 2, 3 ] [ 5, 4 ]
        # [1, 5, 2, 4, 3]

        while second:
            temp1, temp2 = first.next, second.next
            first.next = second
            second.next = temp1
            first = temp1
            second = temp2




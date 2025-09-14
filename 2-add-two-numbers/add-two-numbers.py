# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        # inputs: l1 and l2
        # output: a linked list representing the sum of the digits
        # 1 -> 2 -> 3
        # 1 -> 2 -> 3
        # 2 -> 4 -> 6
        dummy = ListNode()
        curr = dummy
        carry = 0

        while l1 or l2 or carry:
            d1 = l1.val if l1  else 0
            d2 = l2.val if l2 else 0
            total = d1 + d2 + carry
            d3 = ListNode(total % 10)
            carry = total // 10

            curr.next = d3
            curr = curr.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None
        
        return dummy.next


       

        
        
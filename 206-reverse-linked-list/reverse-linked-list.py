# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
    def reverseList(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        # given a linked list head, return a reversed linked list
        #   <- 1  2 -> 3 => 3 -> 2 -> 1
        #        ^  ^
        # base case 
        '''
        if not head:
            return
        current = head
        prev = None
        while current:
            nxt = current.next
            current.next = prev
            prev = current
            current = nxt
        return prev
        '''

        if not head:
            return None
        current = head
        if head.next:
            #recursive step
            current = self.reverseList(head.next)
            head.next.next = head
        head.next = None
        return current
        
            
        
        
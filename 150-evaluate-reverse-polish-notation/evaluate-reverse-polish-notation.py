class Solution(object):
    def evalRPN(self, tokens):
        """
        :type tokens: List[str]
        :rtype: int
        """
        '''
        You are given an array of strings token
        Return an integer that represents the value of the expression.

        when you see an operation we need to take the previous to numbers and perform that operation
        nubmers in tokens array can be negative as well
        edge cases: token lenght can be 1, in that case we just return the number ?

        tokens = ["2","1","+","3","*"]
        output = 9

        iterate through tokens
        at 2, what are my actions ? 
            this is not an operation ( +-/* ) we can store it in another array [2] and go next
        at 1 
            store in to the array [2,1] and go next
        at +
            we should take the previous 2 numbers and perform 2 + 1 = 3 
            pop the 2 numbers and add 3 to the array [3]
        at 3 
            [3,3]
        at * 
            [9]
        
        iterating through tokens so O(n) where n is tokens length
        return stack[0]
        '''
        stack = []
        operations = "*+-/"
        for num in tokens:
            if num in operations:
                num1 = int(stack.pop())
                num2 = int(stack.pop())
                if num == '*':
                    stack.append(num2 * num1)
                if num == '+':
                    stack.append(num2 + num1)
                if num == '-':
                    stack.append(num2 - num1)
                if num == '/':
                    stack.append(int(float(num2) / num1))
            else:
                stack.append(int(num))

        return stack.pop()


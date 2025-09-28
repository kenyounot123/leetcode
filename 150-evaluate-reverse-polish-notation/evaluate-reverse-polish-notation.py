class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        # array of strings tokens[str]
        # Evaluate it and return an integer
        valid_operators = "+-*/"
        stack = []

        def calculate_expression(num1, num2, operator):
            num1 = int(num1)
            num2 = int(num2)
            if operator == "+":
                return num1 + num2
            elif operator == "-":
                return num1 - num2
            elif operator == "*":
                return num1 * num2
            elif operator == "/":
                return int(num1 / num2)


        for i,num in enumerate(tokens):
            if num in valid_operators:
                op2 = stack.pop()
                op1 = stack.pop()
                res = calculate_expression(op1,op2, num)
                stack.append(res)
            else:
                stack.append(num)

        return int(stack[0])
        
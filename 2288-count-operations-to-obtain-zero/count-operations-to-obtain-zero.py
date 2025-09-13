class Solution:
    def countOperations(self, num1: int, num2: int) -> int:
        # input: two numbers
        # output: number of operations required to make either num1=0 or num2=0

        # if num1 < num2 -> num2 = num2 - num1
        # if num2 >= num1 -> num1 = num1 - num2

        # num1 = 2 and num2 = 3
        # num1 = 2 and num2 = 1
        operations = 0
        while num1 > 0 and num2 > 0:
            if num1 < num2:
                num2 = num2 - num1
            else:
                num1 = num1 - num2
            operations += 1
        return operations
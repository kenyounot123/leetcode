class MinStack:

    def __init__(self):
        self.stack = []
        self.min_vals = []

    def push(self, val: int) -> None:
        self.stack.append(val)
        if len(self.min_vals) == 0:
            min_so_far = val
        else:
           min_so_far = min(self.min_vals[-1],val)
        self.min_vals.append(min_so_far)

    def pop(self) -> None:
        self.stack.pop()
        self.min_vals.pop()

    def top(self) -> int:
        return self.stack[-1]

    def getMin(self) -> int:
        return self.min_vals[-1]


# Your MinStack object will be instantiated and called as such:
# obj = MinStack()
# obj.push(val)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.getMin()
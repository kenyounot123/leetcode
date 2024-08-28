/*
Design a stack that supports push, pop, top,

Retrieving the minimum element in constant time.

pop, top and getMin operations will always be called on non-empty stacks.
    -O(1) 
*/
var MinStack = function() {
    this.stack = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    // when pushing to stack we should update the min value
    if (this.stack.length == 0) {
        this.stack.push(val)
        this.min.push(val)
    } else {
        this.min.push(Math.min(val, this.min[this.min.length - 1]))
        this.stack.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
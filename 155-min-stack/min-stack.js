
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.stack.length === 0) {
        this.stack.push({val: val, min: val})
    } else {
        const prevMin = this.stack[this.stack.length - 1].min
        const newMin = Math.min(prevMin, val)
        this.stack.push({val: val, min: newMin})
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return (this.stack.length > 0) ? this.stack[this.stack.length - 1].val : null
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return (this.stack.length > 0) ? this.stack[this.stack.length - 1].min : null
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
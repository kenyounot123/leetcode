
/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.memory = new Map()
    }
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.memory.has(key)) {
        return -1
    }
    const value = this.memory.get(key)
    this.memory.delete(key)
    this.memory.set(key, value)
    return this.memory.get(key)
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.memory.has(key)) {
        this.memory.delete(key)
    }
    this.memory.set(key, value)

    if (this.memory.size > this.capacity) {
        this.memory.delete(this.memory.keys().next().value)
    } 
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
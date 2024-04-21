class Node {
    constructor(key, value) {
        this.key = key
        this.val = value
        this.prev = null
        this.next = null
    }
}
/**
 * @param {number} capacity
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.memory = new Map() // Maps key to node
        this.leastRecent = new Node(0,0)
        this.mostRecent = new Node(0,0)
        this.leastRecent.next = this.mostRecent // doubly linked list
        this.mostRecent.prev = this.leastRecent 
    }
    
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.memory.has(key)) {
        this.remove(this.memory.get(key)) // Remove this key 
        this.insert(this.memory.get(key)) // Update position of this key to be most recent
        return this.memory.get(key).val
    } 
    return -1
    
    
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.memory.has(key)) {
        this.remove(this.memory.get(key))
    }
    this.memory.set(key, new Node(key, value)) 
    this.insert(this.memory.get(key))

    if (this.memory.size > this.capacity) {
        const leastRecent = this.leastRecent.next
        this.remove(leastRecent)
        this.memory.delete(leastRecent.key)
    }
};
LRUCache.prototype.remove = function(node) {
    const prev = node.prev
    const nxt = node.next
    prev.next = nxt
    nxt.prev = prev
}
LRUCache.prototype.insert = function(node) {
    let prev = this.mostRecent.prev
    let next = this.mostRecent
    prev.next = node 
    next.prev = node
    node.next = next
    node.prev = prev
}
/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 class TimeMap {
    constructor() {
       this.data = {};
    }
 }

/** 
 * @param {string} key 
 * @param {string} value 
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function(key, value, timestamp) {
    if (key in this.data) {
        this.data[key].push([value, timestamp])
    } else {
        this.data[key] = [[value, timestamp]]
    }
};

/** 
 * @param {string} key 
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function(key, timestamp) {
    result = ""
    const values = this.data[key] || []
    let l = 0
    let r = values.length - 1
    while (l <= r) {
        const mid = l + Math.floor((r - l) / 2) 
        if (values[mid][1] <= timestamp) {
            result = values[mid][0]
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return result
};

/** 
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

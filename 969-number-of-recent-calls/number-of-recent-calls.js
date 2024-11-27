
var RecentCounter = function() {
    this.requests = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t)

    const lowerBound = t - 3000

    let startIndex = 0

    for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i] < lowerBound) {
            continue
        } else {
            startIndex = i
            break
        }
    }

    return this.requests.length - startIndex
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
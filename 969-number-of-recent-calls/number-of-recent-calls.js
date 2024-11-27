
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
        if (this.requests[i] >= lowerBound) {
            startIndex = i;
            break;
        }
    }
    this.requests = this.requests.slice(startIndex);

    return this.requests.length 
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
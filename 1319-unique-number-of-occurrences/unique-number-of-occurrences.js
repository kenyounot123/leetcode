/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    let counts = new Map()
    for (const num of arr) {
        counts.set(num, (counts.get(num) || 0) + 1)
    }

    let uniqCounts = new Set(counts.values())
    return counts.size === uniqCounts.size
};
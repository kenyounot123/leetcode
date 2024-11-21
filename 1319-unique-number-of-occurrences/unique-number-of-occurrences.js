/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    // inputs:given an array of nums 
    // outputs: a boolean returm true if each value's number of occurrences is unique return false otherwise
    let occurrences = new Map()
    for (let num of arr) {
        occurrences.set(num, (occurrences.get(num) || 0) + 1)
    }

    let uniq = new Set(occurrences.values())
    return uniq.size === occurrences.size

};
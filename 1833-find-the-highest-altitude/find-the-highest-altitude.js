/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    // 0 -> -4 -> -3 
    // inputs : array of nums 
    // outputs: integer number
    // summarize: given an array of nums, starting from 0 and traveling to each index,
    // we can add 0 + index value to see what altitude we end up at . Return the largest 
    // altitude

    let maxAltitude = 0
    let start = 0
    for (let i = 0; i < gain.length; i++) {
        start += gain[i]
        if (start > 0) {
            maxAltitude = Math.max(start, maxAltitude)
        }
    }
    return maxAltitude 
};
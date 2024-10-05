/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    // inputs are 2 strings s1 and s2
    // outputs boolean
    // summarize: check if any order of s1 is contained in s2
    // return true if it is contained else return false

    // somet things to consider: what if s1 is larger than s2 in size ? 

    if (s1.length > s2.length) return false

    let freq1 = new Map()
    for (let char of s1) {
        freq1.set(char, (freq1.get(char) || 0) + 1)
    }

    let l = 0
    let r = 0
    let requiredLength = s1.length
    // s1 = aa
    // s2 = abaa
    while (r < s2.length) {
        if (freq1.get(s2[r]) > 0) {
            requiredLength--
        }
        freq1.set(s2[r], (freq1.get(s2[r]) || 0) - 1)

        r++
        if (requiredLength === 0) return true;


        if (r - l === s1.length) {
            if (freq1.get(s2[l]) >= 0) {
                requiredLength++
            } 
            freq1.set(s2[l], (freq1.get(s2[l]) || 0) + 1)
            l++
        }

    }

    return false

};
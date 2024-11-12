/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let l = 0;
    let r = 0;
    // s = "abc", t = "ahcgbd"
    while (r < t.length) {
        if (s[l] === t[r]) {
            l++
        }
        r++
    }

    return l >= s.length
};
/**
 * @param {string} s
 * @param {number} t
 * @return {number}
 */
var lengthAfterTransformations = function(s, t) {
    // inputs: string s only english letters, and an Integer t
    // outputs: a integer length
    // constraints: minimum transformation is 1, minimum string length is 1, s is       english characters
    // so min length = 1
    // s = "abcyy"
    // t = 1

    // should maintain a queue
    let count = Array(26).fill(0);
    const MOD = 1000000007;

    for (let char of s) {
        count[char.charCodeAt(0) - "a".charCodeAt(0)]++
    }
    // [1, 1, 1, 0, 0, 0, ..., 2, 0]
    while (t > 0) {
        let tmp = Array(26).fill(0)
        for (let i = 0; i < 26; i++) {
            if (i === 25) {
                tmp[0] = (tmp[0] + count[i]) % MOD;
                tmp[1] = (tmp[1] + count[i]) % MOD;
            } else {
                tmp[i + 1] = (tmp[i + 1] + count[i]) % MOD;
            }
        }
        count = tmp
        t -= 1
    }
    return count.reduce((sum, val) => (sum + val) % MOD, 0)
};
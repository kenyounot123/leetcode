/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
    const vowels = ["a","e","i","o","u"]

    let maxVowels = 0

    let l = 0;
    let r = 0;

    let vowelsSeen = 0;
    while (r < s.length) {

        if (vowels.includes(s[r])) {
            vowelsSeen += 1
        }
        if (r - l + 1 === k && vowelsSeen === k) {
            return k 
        } else if (r - l + 1 === k) {
            maxVowels = Math.max(vowelsSeen, maxVowels)
            if (vowels.includes(s[l])) {
                vowelsSeen -= 1
            }
            l++
        }
        r++
    }



    return maxVowels
};
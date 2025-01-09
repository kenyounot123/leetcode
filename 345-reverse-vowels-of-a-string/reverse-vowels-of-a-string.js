/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'
    let vowelsInString = []
    let output = ""

    for (let i = s.length - 1; i >= 0; i--) {
        if (vowels.includes(s[i])) {
            vowelsInString.push(s[i])
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            output += vowelsInString.shift()
        } else {
            output += s[i]
        }
    }

    return output
};
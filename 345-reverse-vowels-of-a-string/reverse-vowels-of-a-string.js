/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = 'aeiouAEIOU'
    let vowelsInString = []
    let strArray = s.split('')

    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            vowelsInString.push([s[i], i])
        }
    }

    let l = 0
    let r = vowelsInString.length - 1

    while (l < r) {
        console.log(vowelsInString[l][1])
        console.log(vowelsInString[r][1])

        const tmp = strArray[vowelsInString[l][1]]
        strArray[vowelsInString[l][1]] = strArray[vowelsInString[r][1]]
        strArray[vowelsInString[r][1]] = tmp
        l++
        r--
    }

    return strArray.join('')
};
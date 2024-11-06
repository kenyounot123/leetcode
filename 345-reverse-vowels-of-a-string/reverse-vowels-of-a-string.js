/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const vowels = "aeiouAEIOU"
    let allVowelsInString = []
    const strArray = s.split('')
    for (let i = 0; i < s.length; i++) {
        if (vowels.includes(s[i])) {
            allVowelsInString.push([s[i], i])
        } 
    }

    let l = 0
    let r = allVowelsInString.length - 1
    while (l < r) {
        const tmp = strArray[allVowelsInString[l][1]]
        strArray[allVowelsInString[l][1]] = strArray[allVowelsInString[r][1]]
        strArray[allVowelsInString[r][1]] = tmp
        l++
        r--
    }

    return strArray.join("")
};
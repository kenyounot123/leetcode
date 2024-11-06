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

   for (let i = 0, j = allVowelsInString.length - 1; i < j; i++, j--) {
        const temp = strArray[allVowelsInString[i][1]];
        strArray[allVowelsInString[i][1]] = strArray[allVowelsInString[j][1]];
        strArray[allVowelsInString[j][1]] = temp;
    }
    return strArray.join("")
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return ""
    }

    let remainder;
    let lengthOfStr1 = str1.length
    let lengthOfStr2 = str2.length

    remainder = lengthOfStr1 % lengthOfStr2

    while (remainder != 0) {
        const tmpRemainder = remainder
        lengthOfStr1 = lengthOfStr2
        remainder = lengthOfStr1 % tmpRemainder
        lengthOfStr2 = tmpRemainder
    }

    return str1.slice(0,lengthOfStr2)
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // inputs: 2 strings
    // outputs: string
    // summarize: given two strings, return the greatest common diviser strings such
    // that it divides both str1 and str2
    // for it to divide a string, it must mean that we can form that string out of it.

    if (str1 + str2 !== str2 + str1) {
        return ""
    }
    // 6
    let n = str1.length
    // 4
    let k = str2.length

    //  6 % 4
    //  2
    while (k) {
        let temp = k
        k = n % k
        n = temp
    }

    return str1.substring(0,n)
};
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    // similar to just saying 2 divides 6 iff 6 = 2 + 2 + 2 
    // question is just asking given 6 and 9, find the gcd such that x divides 6 and 9 => 9 % 6 = 3 then 6 % 3 = 0 => 3 is gcd

    if (str1 + str2 !== str2 + str1) {
        return ""
    }
    let a = str1.length;
    let b = str2.length;

    while (b) { 
        const tmp = b 
        b = a % b
        a = tmp 
    }
    return str1.substring(0,a)
};
/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let l = 0
    let r = 0

    while (r < chars.length) {
        let count = 0
        let current = chars[r] 
        while (r < chars.length && chars[r] === current) {
            count += 1
            r += 1
        }

        chars[l++] = current

        if (count > 1) {
            const num = count.toString()
            for (let digit of num) {
                chars[l++] = digit
            }
        }
    }
    chars.length = l
    return chars.length
};
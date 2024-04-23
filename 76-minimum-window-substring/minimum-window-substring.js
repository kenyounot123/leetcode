/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    // A valid window must contain all of t
    if (t === "") {
        return ""
    }
    let window = new Map() // Maps the letters in our window  to the count of it
    let char = new Map() // maps the letter to the count of it
    for (let c of t) {
        char.set(c, (1 + (char.get(c) || 0)) )
    }
    let need = char.size; // This is the count we need our window to have
    let minLength = -1;
    let res = [-1,-1]
    let have = 0;
    let l = 0;
    // Iterate through s while putting the chars in our window map
    for (let r = 0; r < s.length; r++) {
        const c = s[r]
        window.set(c, (1 + (window.get(c) || 0)))
        // for each letter we check if we can increment our have pointer
        if (char.has(c) && window.get(c) === char.get(c)) {
            have += 1
        }
        // When we have all required characters, update min length and result
        // then keep looping to shift the left pointer untill we do not have 
        // the required characters. That way we can check if there are other results
        while (have === need) {
            
            if (minLength === -1 || (r - l + 1) < minLength) {
                res = [l, r]
                minLength = (r - l + 1)
            }

            //shift left pointer
            window.set(s[l], window.get(s[l]) - 1)
            if (char.has(s[l]) && window.get(s[l]) < char.get(s[l])) {
                have -= 1
            }
            l++;
        }
    }
    return minLength === -1 ? "" : s.substring(res[0],res[1] + 1)
};
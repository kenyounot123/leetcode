/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    // R and D
    // Senate <- R, D
    // inputs: a string containing only R and D's
    // outputs: "Radiant" or "Dire"
    // At every round we have a choice of 'ban a senator' or 'announce victory'

    let queue = []

    senate = senate.split("")

    while (senate.length) {
        let first = senate.shift();
        let len = senate.length;

        for(var i=0; i<len; i++) {
            if(first != senate[i]) {
                senate.splice(i, 1);
                senate.push(first);
                break;
            }
        }
        if(i == len) {
            return first == 'D' ? 'Dire' : 'Radiant';
        }
    }


};
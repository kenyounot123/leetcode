/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
    // input: array of nums
    // output: boolean 
    // summarize: return true if there is a triplet of consecutive increasing numbers
    //  [2,1,5,0,4,6]
    let first = Infinity
    let second = Infinity

    for (let third of nums) {
        if (third < first) {    
            first = third
        } else if (third > first && third < second) {
            second = third
        } else if (third > first && third > second) {
            return true
        }
    }
    return false
};
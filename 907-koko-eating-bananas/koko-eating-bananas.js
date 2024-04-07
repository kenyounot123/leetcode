/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // [3,6,7,11]
    // Every hr, can only eat up to 1 pile max
    //  piles.length <= h
    // Intuition: We can try eating bananas with k = 1,2,3... all the way up to our max k which is just
    // the largest value in piles. 
    // So looping through our piles array, suppose k = 1, and piles = [3,6,7,11]
    // it will take 3 + 6 + 7 + 11 hrs to finish eating all bananas and that is not <= h so k cannot be 1
    // Can repeat this all the way up to 11 till we find the first instance of a valid k.
    // OR since we know k = [1,2,3,4,5,6,7,8,9,10,11] we can do a binary search on k.
    let l = 1;
    let r = Math.max(...piles);
    let minK = r;
    const hoursTaken = (speed) => {
        return piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0)
    }
    while (l <= r) {
        const mid = Math.floor((r + l) / 2)
        
        if (hoursTaken(mid) <= h) {
            minK = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return minK

};
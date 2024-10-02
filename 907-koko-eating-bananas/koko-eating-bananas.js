/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// There are n piles of bananas, the ith pile has piles[i] bananas
// The guards have gone and will come back in h hours.
// Each hour, she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and will not 
// eat any more bananas during this hour.
// Return the minimum integer k such that she can eat all the bananas within h hours.
// summarize: we basically need to pick a k where k is the number of bananas koko will eat
// pick a minimum k such that in h hours, koko will eat all the bananas.
// 8 hours to finish 27 bananas
// 5 hrs to finish 88 bananas ( 18 )
// problem with this is that we cant move on to the next pile unless we finish the first pile
// [4,11,20,23,30]
var minEatingSpeed = function(piles, h) {
    const checkHrs = (piles, k) => {
        let hrs = 0
        for (let p of piles) {
            hrs += Math.ceil(p / k)
        }
        return hrs
    }
    let l = 1
    let r = Math.max(...piles)
    let result = 0
    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        const hours = checkHrs(piles, mid)
        if (hours <= h) {
            result = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    }
    return result
};
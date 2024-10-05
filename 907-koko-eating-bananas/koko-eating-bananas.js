/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function(piles, h) {
    // given an array of nums and a number as inputs
    // outputs: number
    // summarize: we are given an array of nums and some time h
    // we want to find k where k is the minimum number where we can eat all piles within h hours

    // if k > piles[i] then we eat a pile => remaining pile length - 1
    // the most we can eat is max(piles) since it would mean we eat 1 pile every hour
    // if eat too slow > h => then up the speed (k)
    // if eat too fast < h => then lower the speed (k)

    // check from k = 1  to  max(piles) [1,2,3,4,5,6,7,8,9,10,11]


    const checkSpeed = (k, h, piles) => {
        let speed = 0
        for (let num of piles) {
            speed += Math.ceil(num / k)
        }
        return speed
    }

    let l = 1
    let r = Math.max(...piles)
    let minK = 0

    while (l <= r) {
        const mid = Math.floor((l + r) / 2)
        const speed = checkSpeed(mid, h, piles)
        if (speed <= h) {
            minK = mid
            r = mid - 1
        } else {
            l = mid + 1
        }
    } 

    return minK

};
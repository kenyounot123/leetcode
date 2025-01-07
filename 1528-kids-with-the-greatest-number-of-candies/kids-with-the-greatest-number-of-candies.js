/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    maxCandy = Math.max(...candies)
    candyBooleans = candies.map((candy) => {
        return candy + extraCandies >= maxCandy
    })
    return candyBooleans
};
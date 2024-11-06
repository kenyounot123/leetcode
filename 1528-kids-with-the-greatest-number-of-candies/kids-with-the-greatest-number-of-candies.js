/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const maxCandy = Math.max(...candies)
    const newArr = candies.map((candy) => {
        return extraCandies + candy >= maxCandy
    })
    return newArr
};
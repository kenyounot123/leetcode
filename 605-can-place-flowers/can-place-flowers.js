/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    if (!flowerbed.length) {
        return false
    }
    // [1,0,0,0,0,1]
     for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] === 0 && !flowerbed[i - 1] && !flowerbed[i + 1]) {
            i++;
            n--
        }
    }
    return n <= 0

};
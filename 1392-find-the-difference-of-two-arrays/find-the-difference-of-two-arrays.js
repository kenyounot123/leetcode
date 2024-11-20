/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let answer = [[],[]]

    let firstArr = new Set(nums1)
    let secondArr = new Set(nums2)


    for (let num of firstArr) {
        if (!secondArr.has(num)) {
            answer[0].push(num)
        }
    }
    for (let num of secondArr) {
        if (!firstArr.has(num)) {
            answer[1].push(num)
        }
    }




    return answer
};
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    const divide = (l,r) => {
        if (l >= r) return
        let mid = Math.floor((l + r) / 2)
        divide(l, mid)
        divide(mid + 1, r)
        sortAndMerge(l,mid,r)
    } 

    const sortAndMerge = (l, m, r) => {
        let leftArr = nums.slice(l, m + 1)
        let rightArr = nums.slice(m + 1, r + 1)

        let i = 0, j = 0
        while (i < leftArr.length && j < rightArr.length) {
            if (leftArr[i] < rightArr[j]) {
                nums[l++] = leftArr[i++]
            } else {
                nums[l++] = rightArr[j++]
            }
        }

        while (i < leftArr.length) {
            nums[l++] = leftArr[i++]
        }
        while (j < rightArr.length) {
            nums[l++] = rightArr[j++]
        }
    }
    divide(0, nums.length - 1)
    return nums
};

// Merge Sort
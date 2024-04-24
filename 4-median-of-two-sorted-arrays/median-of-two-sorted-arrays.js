/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    // Use bsearch to search for a valid left and right partition 
    let total = nums1.length + nums2.length 
    let half = Math.floor(total / 2)
    let a = nums1
    let b = nums2

    if (b.length < a.length) {
        let temp = a;
        a = b;
        b = temp;
    }

    let l = 0
    let r = a.length - 1
    while (true) {
        const i = l + Math.floor((r - l) / 2) 
        const j = half - i - 2 

        const aLeftNum = (i >= 0) ? a[i] : Number.MIN_SAFE_INTEGER
        const aRightNum = ((i + 1) < a.length) ? a[i + 1] : Number.MAX_SAFE_INTEGER
        const bLeftNum = (j >= 0) ? b[j] : Number.MIN_SAFE_INTEGER 
        const bRightNum = ((j + 1) < b.length) ? b[j + 1] : Number.MAX_SAFE_INTEGER
    
        if (aLeftNum <= bRightNum && bLeftNum <= aRightNum) {
            if (total % 2) {
                return Math.min(aRightNum, bRightNum)
            }
            return (Math.max(aLeftNum, bLeftNum) + Math.min(aRightNum, bRightNum)) / 2
        } else if (aLeftNum > bRightNum) {
            r = i - 1
        } else {
            l = i + 1
        }
    }
    
};
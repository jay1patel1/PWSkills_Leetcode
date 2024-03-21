/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let findMedianSortedArrays = function(nums1, nums2) {

    if (nums1.length > nums2.length) {
        [nums1,nums2] = [nums2,nums1];
    }

    let n = nums1.length;
    let m = nums2.length;
    let lo = 0 , hi = n;

    while (lo <= hi) {
        const mid1 = Math.floor((lo+hi)/2);
        const mid2 = Math.floor((m+n+1)/2) - mid1;

        let l1;
        if (mid1 === 0) {
            l1 = Number.MIN_SAFE_INTEGER;
        } else {
            l1 = nums1[mid1 - 1];
        }

        let l2;
        if (mid2 === 0) {
            l2 = Number.MIN_SAFE_INTEGER;
        } else {
            l2 = nums2[mid2-1];
        }

        let r1;
        if (mid1 === n) {
            r1 = Number.MAX_SAFE_INTEGER;
        } else {
            r1 = nums1[mid1];
        }

        let r2;
        if (mid2 === m) {
            r2 = Number.MAX_SAFE_INTEGER;
        } else {
            r2 = nums2[mid2];
        }

        if (l1 <= r2 && l2 <= r1) {
            if (((n+m) % 2) === 0) {
                return (Math.max(l1,l2) + Math.min(r1,r2)) / 2;
            } else {
                return Math.max(l1,l2);
            }
        } else {
            if (l1 > r2) {
                hi = mid1 - 1;
            } else {
                lo = mid1 + 1;
            }
        }
    }
};

console.log(findMedianSortedArrays([2,3,6,15],[1,3,4,7,10,12,13]))
console.log(findMedianSortedArrays([1,3],[2]))
console.log(findMedianSortedArrays([1,2],[3,4]))
console.log(findMedianSortedArrays([1,3],[2,7]))
console.log(findMedianSortedArrays([],[2,3]))
console.log(findMedianSortedArrays([1,2,3],[3,4,5]))
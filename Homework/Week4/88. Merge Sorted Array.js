let merge = function(nums1, m, nums2, n) {

    let i = m-1;
    let j = n-1;
    let k = (m+n) -1;

    while (i>=0 && j>=0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            k--;
            i--;
        } else {
            nums1[k] = nums2[j];
            k--;
            j--;
        }
    }

    while (j >= 0) {
        nums1[k] = nums2[j];
            k--;
            j--;
    }

    while (k >= 0) {
        nums1[k] = nums1[i];
            k--;
            i--;
    }
    return nums1;
};

console.log(merge([1,2,3,0,0,0],3,nums2 = [2,5,6],3))
console.log(merge([1],1,nums2 = [0],0));
console.log(merge([0],0,[1],1))
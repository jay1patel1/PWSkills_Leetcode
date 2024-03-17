/**
 * @param {number[]} nums
 * @return {number}
 */
let findPeakElement = function(nums) {

    if (nums.length === 1) {
        return 0;
    }

    let n = nums.length;
    let lo = 0;
    let hi = n-1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2);

        if (mid === 0 && nums[mid+1] < nums[mid]) {
            return mid;
        } else if (mid === n-1 && nums[mid-1] < nums[mid]) {
            return mid;
        } else if (nums[mid] > nums[mid+1] && nums[mid] > nums[mid-1] ) {
            return mid;
        } else if (nums[mid] < nums[mid+1]) {
            lo = mid+1;
        } else {
            hi = mid
        }
    }
};

console.log(findPeakElement([1,2,1,3,5,6,4]));
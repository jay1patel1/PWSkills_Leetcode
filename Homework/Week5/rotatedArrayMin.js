/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0
    let hi = nums.length-1

    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2);

        if (nums[mid] < nums[mid+1] && nums[mid] < nums[mid-1]) {
            return mid;
        } else if (nums[mid] < nums[mid+1] && mid === 0) { 
            return mid;
        } else if (nums[mid] < nums[mid-1] && mid === nums.length-1){
            return mid;
        } else if (nums.length === 1 && nums[0]) {
            return mid;
        }

        if (nums[lo] <= nums[mid]) {
            
        }
    }
};
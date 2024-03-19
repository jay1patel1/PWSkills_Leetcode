/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let lo = 0;
    let hi = nums.length-1;

    while (lo <= hi) {
        let mid = lo + Math.floor ((hi-lo)/2);

        if (nums[mid] === target) {
            return true
        } else if (nums[mid] === nums[hi] && nums[hi] === nums[lo]) {
            lo++;
            hi--;
        } else {
            if (nums[mid] >= nums[lo] ) {
                if (nums[mid] > target && nums[lo] <= target) {
                    hi = mid-1;
                } else {
                    lo = mid +1;
                }
            } else {
                if (nums[mid] < target && nums[hi] >= target) {
                    lo = mid + 1;
                } else {
                    hi = mid -1;
                }
            }
        }
    }

    return false;
};

console.log(search([2,5,6,0,0,1,2],0));
console.log(search([2,5,6,0,0,1,2],3));
console.log(search([1,0,1,1,1],0));
console.log(search([1,1,1,1,1,1,1,1,1,1,1,1,1,2,1,1,1,1,1],2));
console.log(search([5,1,3],3));

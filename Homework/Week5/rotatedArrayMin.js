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
        } else if (nums.length === 1) {
            return mid;
        }

        if (nums[lo] <= nums[mid] && nums[mid] > nums[hi]) {
            lo = mid+1;
        } else {
            hi = mid-1;
        }
    }
};

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))
console.log(findMin([11,13,15,17]))
console.log(findMin([0]))
console.log(findMin([20,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))
console.log(findMin([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]))
console.log(findMin([5,2]))
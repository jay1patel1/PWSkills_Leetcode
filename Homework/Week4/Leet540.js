/**
 * @param {number[]} nums
 * @return {number}
 */
let singleNonDuplicate = function(nums) {
    function run (nums,start,end) {

        if (start >= end) {
            return nums[start];
        }

        let mid = Math.floor(start+end)/2;

        if (nums[mid] === nums[mid+1]) {
            mid = mid-1;
        }

        if (((mid+1)+end)%2 !== 0) {
            return run(nums,start,mid)
        } else {
            return run(nums,mid+1,end);
        }
    }

    return run(nums,0,nums.length-1)
};

console.log(singleNonDuplicate([1,1,2,3,3,4,4,8,8]))
console.log(singleNonDuplicate([1,1,3,3,4,4,5,8,8]))
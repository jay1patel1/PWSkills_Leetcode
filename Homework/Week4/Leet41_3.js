/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]-1;
        if (nums[i] > 0 && nums[i] <= nums.length && nums[i] !== i+1) {
            [nums[i],nums[x]] = [nums[x],nums[i]];
            i--;
        }
    }

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== j+1) {
            return j+1;
        }
        
    }
};

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12,1,2]));
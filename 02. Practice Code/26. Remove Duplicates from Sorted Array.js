/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function(nums) {
    let pointer_A = 0;
    let pointer_B = 0;

    while (pointer_B < nums.length) {
        if (nums[pointer_A] === nums[pointer_B]) {
            pointer_B++
        } else if (nums[pointer_A] < nums[pointer_B]) {
            pointer_A++
            [nums[pointer_A],nums[pointer_B]] = [nums[pointer_B],nums[pointer_A]];
            pointer_B++
        }
    }

    console.log(pointer_A+1,nums);
};

removeDuplicates ([1,1,2]);
removeDuplicates ([0,0,1,1,1,2,2,3,3,4]);
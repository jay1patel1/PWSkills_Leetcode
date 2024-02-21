/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let pointer_a = 0;
    let pointer_b = nums.length-1;

    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] === 0) {
            [nums[i],nums[pointer_a]] = [nums[pointer_a],nums[i]];
            pointer_a++;
        } else if (nums[i] === 2) {
            [nums[i],nums[pointer_b]] = [nums[pointer_b],nums[i]];
            pointer_b--
        }
    }
}

sortColors([2,0,2,1,1,0]);
sortColors([2,0,1]);
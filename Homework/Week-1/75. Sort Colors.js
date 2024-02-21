/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
    let pointer_a = 0;
    let pointer_b = 0;
    let pointer_c = nums.length-1;

    while (pointer_b !== pointer_c) {
        if (pointer_a === 2) {
            [nums[pointer_a],nums[pointer_c]] = [nums[pointer_c],nums[pointer_a]];
            pointer_c--;
        } else if (pointer_a === 0) {
            [nums[pointer_a],nums[pointer_b]] = [nums[pointer_b],nums[pointer_a]];
            pointer_b++
        } else {
            pointer_a++
        }
    }

    console.log(nums)

}

sortColors([2,0,2,1,1,0]);
sortColors([2,0,1]);
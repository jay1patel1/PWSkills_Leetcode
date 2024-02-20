/**
 * @param {number[]} nums
 * @return {number[]}
 */
let sortedSquares = function(nums) {
    let pointer_left = 0;
    let pointer_right = nums.length-1;
    let result = Array(nums.length-1);

    for (let i = result.length; i >= 0 ; i--) {
        if (nums[pointer_left]**2 > nums[pointer_right]**2) {
            result[i] = nums[pointer_left]**2;
            pointer_left++;
        } else {
            result[i] = nums[pointer_right]**2;
            pointer_right--;
        }

    }
    return result;
};

sortedSquares ([-4,-1,0,3,10]);
sortedSquares ([-7,-3,2,3,11]);
sortedSquares ([-5,-3,-2,-1]);
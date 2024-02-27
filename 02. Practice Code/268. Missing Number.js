/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function(nums) {
    let sortedArray = nums.sort((a,b) => a - b)
    let startPoint = 0;

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] > startPoint) {
            break
        }
        startPoint++
    }
    return (startPoint);
};

missingNumber([3,0,1]);
missingNumber([0,1]);
missingNumber([9,6,4,2,3,5,7,0,1]);
missingNumber([1]);
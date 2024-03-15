/**
 * @param {number[]} nums
 * @return {number}
 */
let firstMissingPositive = function(nums) {

    let obj = {};

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            if (!(obj[nums[i]])) {
                obj[nums[i]] = 1;
            }
        }
    }

    let missing = 1

    while (obj[missing]) {
        missing++
    }

    return missing
};

console.log(firstMissingPositive([1,2,0]));
console.log(firstMissingPositive([3,4,-1,1]));
console.log(firstMissingPositive([7,8,9,11,12]));
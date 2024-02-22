/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {

    let h_Obj = {};

    for (let i = 0; i < nums.length; i++) {

        if (h_Obj[nums[i]] === undefined) {
            h_Obj[nums[i]] = 1
        } else {
            h_Obj[nums[i]]++
        }
    }

    for (let i = 0; i < nums.length; i++) {
        let key = target - nums[i]
        if (h_Obj[target-nums[i]] !== undefined) {
            console.log(target-nums[i])
            console.log(key)
        }
    }


    console.log(h_Obj)
};

twoSum([2,7,11,15],9);
twoSum([3,2,4],6);
twoSum([3,3],6);
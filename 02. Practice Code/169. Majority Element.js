/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {

    let mp = {}

    let maxValue = 0;
    let rerunValue;

    for (let i = 0; i < nums.length; i++) {

        if (mp[nums[i]] === undefined) {
            mp[nums[i]] = 1;
        } else if (mp[nums[i]] !== undefined){
            mp[nums[i]]++;
        }

        if (mp[nums[i]] > maxValue) {
            rerunValue = nums[i];
            maxValue = mp[nums[i]];
        }
    }

    console.log(rerunValue);
};

majorityElement([3,2,3]);
majorityElement([7,7,7,7,2,2,1,1,1,2,2,7,7,7,7,6,6,8,8,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]);
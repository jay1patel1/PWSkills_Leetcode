/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function(nums) {
    let mp = {}
    for (let index = 0; index < nums.length; index++) {
        if (mp[nums.index] === undefined) {
            console.log(nums.index);
        } else {
            mp[nums.index]++
        }
    }
    console.log(mp);
};

majorityElement([3,2,3]);
majorityElement([2,2,1,1,1,2,2]);
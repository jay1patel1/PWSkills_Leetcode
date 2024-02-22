/**
 * @param {number[]} nums
 * @return {boolean}
 */
let containsDuplicate = function(nums) {

    let hashMap = {}

    for (let i = 0; i < nums.length; i++) {
        if (hashMap[nums[i]] === undefined) {
            hashMap[nums[i]] = 1;
        } else {
            return true ;
        }
    }

    return false
};

// containsDuplicate([1,2,3,1]);
// containsDuplicate([1,2,3,4]);
containsDuplicate([1,1,1,3,3,4,3,2,4,2]);

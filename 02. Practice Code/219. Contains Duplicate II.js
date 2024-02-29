/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {

    for (let i = 0; i < (nums.length-1); i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                let value = j-i;
                console.log(i,j,value);
                
                if (value > k) {
                    console.log(false);
                }
            }
        }
        
    }
};

containsNearbyDuplicate ([1,2,3,1],3);
containsNearbyDuplicate ([1,0,1,1],1);
containsNearbyDuplicate ([1,2,3,1,2,3],2);
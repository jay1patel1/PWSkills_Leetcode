/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
    let ar = nums.sort((a,b) => (a-b))
    let returnArray = [];
    let p_A = 0;
    let p_B = 1;
    let p_C = 2;
    let p_D = 3;
    console.log(ar)

    while (p_A < ar.length-3) {
        while (p_B < ar.length-2) {
            if ((target-(p_A+p_B)) > (p_C+p_D)) {

            }
            p_B++;
        }
        p_A++;
    }
};

fourSum([1,0,-1,0,-2,2],0)
fourSum([2,2,2,2,2],8)
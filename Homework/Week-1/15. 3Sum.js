/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    let array = nums.sort((a,b) => a-b);
    let result = [];

    for (let i = 0; i < array.length -2; i++) {
        if (array[i] === array[i-1]) {
            i++
        } else {

            let p_a = i+1;
            let p_b = array.length - 1;

            while (p_a < p_b) {
                if ((0-array[i]) === (array[p_a]+array[p_b])) {
                        result.push([array[i],array[p_a],array[p_b]])
                        p_a++;
                } else if ((0-array[i]) < (array[p_a]+array[p_b])) {
                    p_b--;
                } else {
                    p_a++;
                }
            }
        }
    }
    console.log(result);
};

threeSum([-1,0,1,2,-1,-4]);
threeSum([0,1,1]);
threeSum([0,0,0]);
threeSum([0,0,0,0]);
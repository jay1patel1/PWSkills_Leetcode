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
    let p_D = ar.length-1;

    while (p_A < ar.length-3) {
        p_B = p_A+1;

        while (p_B < ar.length-2) {
            p_C = p_B+1;
            p_D = ar.length-1;
            while (p_C < p_D) {
                if ((target-(ar[p_A]+ar[p_B])) > (ar[p_C]+ar[p_D])) {
                    p_C++
                } else if ((target-(ar[p_A]+ar[p_B])) < (ar[p_C]+ar[p_D])) {
                    p_D--
                } else if ((target-(ar[p_A]+ar[p_B])) === (ar[p_C]+ar[p_D])) {
                    returnArray.push([ar[p_A],ar[p_B],ar[p_C],ar[p_D]]);
                    p_C++;
                    while (ar[p_C] === ar[p_C-1]) {
                        p_C++;
                    }
                    p_D--;
                }
            }
            p_B++;
            while (ar[p_B] === ar[p_B-1]) {
                p_B++;
            }
        }
        p_A++;
        while (ar[p_A] === ar[p_A-1]) {
            p_A++;
        }
    }
    console.log(returnArray);
};

fourSum([1,0,-1,0,-2,2],0)
fourSum([2,2,2,2,2],8)
fourSum([-2,-1,-1,1,1,2,2],0)
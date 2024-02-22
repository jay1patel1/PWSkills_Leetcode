/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let threeSum = function(nums) {
    let array = nums.sort((a,b) => a-b);
    let result = [];

    let pointer_a = 0
    let pointer_b = 1
    let pointer_c = array.length - 1


    while (pointer_a < array.length-2) {
        while (pointer_b < pointer_c) {
            if ((0-array[pointer_a]) > (array[pointer_b]+array[pointer_c])) {
                pointer_b++
            } else if ((0-array[pointer_a]) < (array[pointer_b]+array[pointer_c])) {
                pointer_c--
            } else {
                result.push([array[pointer_a],array[pointer_b],array[pointer_c]])
                pointer_b++
                while (array[pointer_b] === array[pointer_b-1]) {
                    pointer_b++
                }
            }
        }
        pointer_a++;
        while (array[pointer_a] === array[pointer_a-1]) {
            pointer_a++
        }
        pointer_b = pointer_a+1;
        pointer_c = array.length-1;
    }

    console.log(result);
};

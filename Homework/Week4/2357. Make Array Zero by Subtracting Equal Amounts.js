/**
 * @param {number[]} nums
 * @return {number}
 */
let minimumOperations = function(nums) {

    let obj = {};

    nums.forEach((i) => {
        if (obj[i]) {
            obj[i]++
        } else {
            obj[i] = 1;
        }
    })

    let length = Object.keys(obj).length;

    if (obj[0]) {
        return length -1
    } else {
        return length
    }
};

console.log(minimumOperations ([1,5,0,3,5]));
console.log(minimumOperations ([1]));
console.log(minimumOperations ([1,5,0,3,5,7,8,6,2])); 
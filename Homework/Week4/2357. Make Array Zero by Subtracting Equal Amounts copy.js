/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let k = new Set(nums) // convert array to set; [...nums] is destructuring syntax 
    return k.has(0) ? k.size-1 : k.size; // we dont need 0, hence if zero exists return size-1
};

console.log(minimumOperations ([1,5,0,3,5,7,8,6,2])); 
minimumOperations ([1]);
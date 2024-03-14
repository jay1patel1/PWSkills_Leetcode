/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersect = function(nums1, nums2) {
    let obj = {};
    let result = [];

    for (const resultElement of nums1) {
        if (obj[resultElement]) {
            obj[resultElement]++
        } else {
            obj[resultElement] = 1;
        }
    }
    
    for (const resultElement of nums2) {
        if (obj[resultElement] > 0) {
            obj[resultElement]--;
            result.push(resultElement);
        }
    }

    console.log(result);
    return result
    
};

intersect([1,2,2,1], [2,2]);
intersect([4,9,5], [9,4,9,8,4]);
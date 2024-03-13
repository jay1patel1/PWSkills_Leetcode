/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let intersection = function(nums1, nums2) {
    function map (arr,arr2) {
        let obj = {};
        let obj2 = {};

        for (let i = 0; i < arr.length; i++) {
            if (obj[arr[i]]) {
                obj[arr[i]]++;
            } else {
                obj[arr[i]] = 1;
            }
        }

        for (let i = 0; i < arr2.length; i++) {
            if (obj[arr2[i]]) {
                if (obj2[arr2[i]]) {
                    obj2[arr2[i]]++;
                } else {
                    obj2[arr2[i]] = 1;
                }
            }
        }

        console.log(obj2)
        return obj2;
    }

    const num1 = Object.keys(map(nums1,nums2)).map(Number);

    console.log(num1);
    return num1;
};

intersection([1,2,2,1], [2,2]);
intersection([1,2,2,1], [2,2]);
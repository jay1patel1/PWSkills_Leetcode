function splitArray(nums,x) {
    let i = 0;
    let j = nums.length-1;
    let k = 0;

    while (i < j) {
        if (nums[i] > x) {
            [nums[i],nums[j]] = [nums[j],nums[i]];
            j--
        } else if (nums[i] < x) {
            i++
        }  else if (nums[j] < x) {
            [nums[i],nums[j]] = [nums[j],nums[i]];
            i++
        } else if (nums[j] > x) {
            j--;
        } else {}
    }

    return nums;
}

console.log(splitArray([17, -42, 55, -29, 83, -6, 91, -38, 20, 74],20));
console.log(splitArray([2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,4],2));
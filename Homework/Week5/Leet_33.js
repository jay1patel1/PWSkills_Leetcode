function search (nums,target) {
    let lo = 0;
    let hi = nums.length - 1;

    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2)

        if (nums[mid] === target) {
            return mid;
        }


        if (nums[lo] <= nums[mid]) {
            if (nums[lo] <= target && target < nums[mid]) {
                hi = mid-1;
            } else {
                lo = mid + 1;
            }
        } else {
            if (nums[mid] < target && target <= nums[hi]) {
                lo = mid + 1;
            } else {
                hi = mid - 1;
            }
        }
    }

    return -1
}

console.log(search([4,5,6,7,0,1,2],0))
console.log(search([4,5,6,7,0,1,2],3))
console.log(search([1],0))
console.log(search([1,3],3))
console.log(search([1,3],1))
console.log(search([1,3,5],1))
console.log(search([3,1],1))

/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minimizeMax = function (nums, p) {
    if (p === 0) {
        return 0;
    }

    let sortedNums = nums.sort((a, b) => a - b);

    function isValid (value) {
        let i = 0;
        let count = 0;

        while (i < nums.length) {
            if ((sortedNums[i+1] - sortedNums[i]) <= value) {
                count++;
                i++;
                i++;
            } else {
                i++;
            }
        }

        if (count >= p) {
            return true;
        } else {
            return false;
        }
    }

    let lo = 0
    let hi = sortedNums[sortedNums.length-1] - sortedNums[0]

    while (lo <= hi) {
        let mid = lo + Math.floor((hi-lo)/2);

        if (isValid(mid)) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }

    return lo;

};

console.log(minimizeMax([10,1,2,7,1,3],2));
console.log(minimizeMax([4,2,1,2],1));

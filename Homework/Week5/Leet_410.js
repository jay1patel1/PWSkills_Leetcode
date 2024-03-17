const shipWithinDays = function(nums, k) {
    function checkDays (value) {
        let store = 0;
        let k = 0;
        for (let i = 0; i < nums.length; i++) {
            if ((store + nums[i]) <= value) {
                store += nums[i];
            } else {
                k++;
                store = 0;
                i--;
            }
        }
        k++;
        return k;
    }
    function search () {

        let lo = Math.max(...nums);
        let hi = nums.reduce((a,c) => a+c,0);
        let ans = lo

        while (lo <= hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            let takenDays = checkDays(mid);

            if (k >= takenDays) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }

        return ans;
    }

    return search();
};

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5))
console.log(shipWithinDays([3,2,2,4,1,4],3))
var splitArray = function(nums, k) {

    function check (value) {
        let Arraycontainer = 0;
        let maxArray = 0;

        for (let i = 0; i < nums.length; i++) {
            if ((Arraycontainer+nums[i]) <= value) {
                Arraycontainer += nums[i];
            } else {
                maxArray++;
                Arraycontainer = 0;
                i--
            }
        }
        maxArray++
        return maxArray;
    }

    function search () {

        let lo = Math.max(...nums);
        let hi = nums.reduce((a,c) => a+c, 0);
        let ans = lo;

        while (lo <= hi) {
            
            let mid = lo + Math.floor((hi-lo)/2);
            let ArrayMaxNumber = check(mid);

            if (ArrayMaxNumber <= k) {
                ans = mid;
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        return ans;
    }

    search();
}

console.log(shipWithinDays([1,2,3,4,5,6,7,8,9,10],5))
console.log(shipWithinDays([3,2,2,4,1,4],3))
const shipWithinDays = function(weights, days) {
    function checkDays (value) {
        let store = 0;
        let days = 0;
        for (let i = 0; i < weights.length; i++) {
            if ((store + weights[i]) <= value) {
                store += weights[i];
            } else {
                days++;
                store = 0;
                i--;
            }
        }
        days++;
        return days;
    }
    function search () {

        let lo = Math.max(...weights);
        let hi = weights.reduce((a,c) => a+c,0);
        let ans = lo

        while (lo <= hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            let takenDays = checkDays(mid);

            if (days >= takenDays) {
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
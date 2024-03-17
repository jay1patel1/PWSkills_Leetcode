let minEatingSpeed = function(piles, h) {
    function count (num) {

        let count = 0;

        for (let i = 0; i < piles.length; i++) {
            let value = Math.ceil((piles[i]/num));
            count += value;
        }

        return count
    }

    function run (pile) {

        let max = Math.max(...pile)
        let low = 1;
        let hi = max;
        let ans = 1;

        while (low <= hi) {

            let mid = low + Math.floor((hi-low)/2);
            let value = count(mid);

            if (value <= h) {
                ans = mid;
                hi = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return ans;
    }

    return run(piles);
};

console.log(minEatingSpeed([3,6,7,11],8))
console.log(minEatingSpeed([30,11,23,4,20],5))
console.log(minEatingSpeed([30,11,23,4,20],6))
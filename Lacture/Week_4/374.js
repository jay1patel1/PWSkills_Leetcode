var guessNumber = function(n) {
    let lo = 0;
    let hi = n-1;

    while (lo <= hi) {
        let mid = Math.floor((hi-lo)/2);
        let result = guess(mid);
        if (result === 0) {
            return mid
        } else if (result === 1) {
            lo = mid +1;
        } else {
            hi = mid-1;
        }
        return lo;
    }
};
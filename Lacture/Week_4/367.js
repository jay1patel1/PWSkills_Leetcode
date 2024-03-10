/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let hi = num;
    let low = 0;

    while (low < hi) {

        let mid = Math.floor((hi+low)/2);

        if (mid*mid === num) {
            return mid;
        } else if (mid*mid < num) {
            low = mid+1;
        } else if (mid*mid > num) {
            hi = mid-1;
        }
    }

    let result = low*low === num;
    return result;
};

isPerfectSquare(14)
isPerfectSquare(16)
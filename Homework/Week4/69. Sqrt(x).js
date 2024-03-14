/**
 * @param {number} x
 * @return {number}
 */
let mySqrt = function(x) {

    let target = x;
    function binarySearch (start,end) {

        let mid = (start+end)/2;

        if (Math.floor((mid*mid)) === target) {
            return Math.floor(mid);
        } else if ((mid*mid) > target) {
            return binarySearch(start,mid);
        } else {
            return binarySearch(mid,end);
        }
    }

    let start = 0;
    let end = x;

    return binarySearch (start,end);
};

console.log(mySqrt (16));
console.log(mySqrt (25));
console.log(mySqrt (20));
console.log(mySqrt (100));
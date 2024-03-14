/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    function binarySearch (target,start,end) {
        let value = 
        if (start > end) {
            return -1;
        } else {
            const mid = Math.floor((start+end) / 2);
            
            if ((end - mid) === target) {
                    return mid;
            } else if ((end - mid) > target) {
                binarySearch (target, start, mid);
            }  else {
                binarySearch (target, mid, end);
            }
        }
    }

    let target = 0;
    let start = 0;
    let end = x;

    binarySearch (target,start,end);
};

mySqrt (16);
/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        
        const mid = lo + Math.floor ((hi-lo)/2);

        if (arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) {
            return mid;
        } else if (arr[mid] > arr [mid+1] && mid === 0) {
            return mid;
        } else if (arr[mid] > arr[mid-1] && mid === arr.length-1) {
            return mid;
        } else if (arr.length === 1) {
            return arr[0];
        }

        if (arr[mid] >= arr[mid-1] || arr[mid] < arr[mid+1]) {
            lo = mid + 1; 
        } else {
            hi = mid-1;
        }
    }
};

console.log(peakIndexInMountainArray([0,1,0]));
console.log(peakIndexInMountainArray([0,2,1,0]));
console.log(peakIndexInMountainArray([0,10,5,2]));
console.log(peakIndexInMountainArray([3,5,3,2,0]));
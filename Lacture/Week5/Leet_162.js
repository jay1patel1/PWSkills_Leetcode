var findPeakElement = function(nums) {

    let arr = nums;

    function run (start,end) {

        let mid = Math.floor((start+end)/2);

        if (arr[mid] > arr[mid+1] && arr[mid] > arr[mid-1]) {
            return arr[mid];
        } else if (arr[mid] > arr[mid+1]) {
            return run (start,mid)
        } else {
            return run (mid,end)
        }

    }
    return run(0,arr.length-1)
};

console.log(findPeakElement([1,2,1,3,5,6,4]))
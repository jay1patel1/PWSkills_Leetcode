function firstAndLast (arr,x) {
    function lower(arr) {
        let n = arr.length;
        let lo = 0;
        let hi = n-1;
        let ans = arr.length;

        while (lo <= hi) {

            let mid = lo +(Math.floor((hi-lo)/2));

            if (arr[mid] < x) {
                lo = mid+1
            } else {
                ans = mid;
                hi = mid-1
            }
        }
    return ans;
    }
    function upper(arr) {
        let n = arr.length;
        let lo = 0;
        let hi = n-1;
        let ans = arr.length;

        while (lo <= hi) {

            let mid = lo +(Math.floor((hi-lo)/2));

            if (arr[mid] <= x) {
                lo = mid+1
            } else {
                ans = mid;
                hi = mid-1
            }
        }
        return ans;
    }

    function run () {
        let low = lower(arr);
        if (arr[low] !== x) {
            let returnArr = [-1,-1];
            return returnArr;
        } else {
            let hi = upper(arr);
            let returnArr = [low,hi];
            return returnArr;
        }
    }

    return run();
}

console.log(firstAndLast([5,7,7,8,8,10],8))
console.log(firstAndLast([5,7,7,8,8,10],6))
console.log(firstAndLast([],1))
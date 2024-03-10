function quickSort (nums) {

    function splitArray (arr,start,end) {

        if (!(start < end)) {
            return
        }

        let i = start - 1; // bucket
        let j = start; // finding
        let randomPosition = Math.floor(Math.random() * (end - start + 1)) + start;
        let x = arr[randomPosition];
        [arr[randomPosition],arr[end]] = [arr[end],arr[randomPosition]]

        while (j <= end - 1) {
            if (arr[j] < x) {
                i++
                [arr[j],arr[i]] = [arr[i],arr[j]];
            }
            j++
        }

        [arr[i + 1], arr[end]] = [arr[end], arr[i + 1]]

        splitArray(arr,start,i);
        splitArray(arr,i+2,end);

        return arr;
    }

    const returnArray = splitArray(nums,0,nums.length-1);
    return (returnArray)
}


console.log(quickSort ([9,6,3,1,4,8]));
console.log(quickSort ([5, 9, 12, 3, 8]));
console.log(quickSort ([17, 22, 6, 11, 4]));
console.log(quickSort ([5,1,1,2,0,0]));
console.log(quickSort ([5,2,3,1]));
console.log(quickSort ([1,1,1,2,2,2,3,4,4,4,4,5,5,5,2,2,2,1,1,1]));
console.log(quickSort ([0]));
// splitArray ([1, 8, 14, 19, 25],8);
// splitArray ([10, 15, 20, 6, 11],15);
// splitArray ([3, 7, 13, 18, 24],13);

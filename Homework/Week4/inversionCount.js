function mergeSort (arr) {

    let inversion = 0;

    function merge(left,right) {

        let i = 0, j = 0, resultArray = [];

        while (i < left.length && j < right.length) {
            if (left[i] <= right[j]) {
                resultArray.push(left[i]);
                i++;
            } else {
                inversion += left.length - i;
                resultArray.push(right[j]);
                j++
            }
        }

        while (j < right.length) {
            resultArray.push(right[j]);
            j++
        }

        while (i < left.length) {
            resultArray.push(left[i]);
            i++;
        }

        return resultArray;
    }
    function helper (arr,start,end) {

        if (start === end) {
            return [arr[start]];
        }

        let mid = Math.floor((start+end)/2);

        let left = helper(arr,start,mid);
        let right = helper(arr,mid+1,end);

        return merge (left,right)
    }

    return [helper(arr,0,arr.length-1,0),inversion];

}

console.log(mergeSort([1, 20, 6, 4, 5]))
console.log(mergeSort([8, 4, 2, 1]))
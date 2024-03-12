function mergeSort (arr) {

    let inversion = 0;

    function merge(left,right) {

        let i = 0, j = 0, resultArray = [];

        while (i < left.length && j < right.length) {
            if (left[i] > right[j]) {
                inversion++;
            }
            if (left[i] <= right[j]) {
                resultArray.push(left[i]);
                i++;
            } else {
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

    helper(arr,0,arr.length-1,0);
    return inversion;

}

console.log(mergeSort([1, 20, 6, 4, 5]))
console.log(mergeSort([8, 4, 2, 1]))
console.log(mergeSort([2, 4, 1, 3, 5]))
function merge (left, right) {
    let i = 0;
    let j = 0;

    let returnArray = new Array(0);

    while (i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            returnArray.push(left[i]);
            i++;
        } else {
            returnArray.push(right[j]);
            j++;
        }
    }

    while (i < left.length) {
        returnArray.push(left[i]);
        i++;
    }

    while (j < right.length) {
        returnArray.push(right[j]);
        j++;
    }

    return (returnArray);
}

function mergeHelper (arr,start,end) {

    if (start === end) {
        let resultArray = [];
        resultArray.push(arr[start]);
        return resultArray;
    }

    let mid = Math.floor((start + end)/2);
    let left = mergeHelper(arr,start,mid);
    let right = mergeHelper(arr,mid+1,end);

    let returnArray = merge(left,right);

    console.log(returnArray);

    return returnArray;
}

function mergesort(array) {
    let returnArray = mergeHelper(array,0,array.length-1);
    console.log(returnArray);
    return returnArray;
}

mergesort([5,4,3,2,1]);
function splitArray (arr,start,end) {

    if (start >= end) {
        return
    }

    let i = start;
    let j = end;
    let randomPosition = Math.floor(Math.random() * (j - i + 1)) + i;
    let x = arr[randomPosition];

    while (i < j) {
        if (arr[i] > x) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j--;
        } else if (arr[j] < x) {
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            i++;
        } else if (arr[i] < x) {
            i++;
        } else if (arr[j] > x) {
            j--;
        }
    }

    splitArray(arr,start,i-1);
    splitArray(arr,i+1,end);

    return arr;
}

function quickSort (array) {
    const returnArray = splitArray(array,0,array.length-1);
    console.log(returnArray)
}

quickSort ([9,6,3,1,4,8]);
quickSort ([5, 9, 12, 3, 8]);
quickSort ([17, 22, 6, 11, 4]);
// splitArray ([1, 8, 14, 19, 25],8);
// splitArray ([10, 15, 20, 6, 11],15);
// splitArray ([3, 7, 13, 18, 24],13);
quickSort ([1,1,1,2,2,2,3,4,4,4,4,5,5,5,2,2,2,1,1,1]);

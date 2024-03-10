function splitArray (arr,x) {
    let i = 0;
    let j = arr.length - 1;

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

    console.log(arr);
}

splitArray ([9,6,3,1,4,8],4);
splitArray ([9,6,3,1,4,8],6);
splitArray ([5, 9, 12, 3, 8],9);
splitArray ([17, 22, 6, 11, 4],11);
splitArray ([1, 8, 14, 19, 25],8);
splitArray ([10, 15, 20, 6, 11],15);
splitArray ([3, 7, 13, 18, 24],13);
splitArray ([1,1,1,2,2,2,3,4,4,4,4,5,5,5,2,2,2,1,1,1],3);

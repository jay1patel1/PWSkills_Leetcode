function splitArray (arr,x) {
    let i = -1;
    let j = 0;
    let k = arr.length;

    while (j < k) {
        if (arr[j] < x) {
            i++;
            [arr[i],arr[j]] = [arr[j],arr[i]];
        }

        if (arr[j] === x) {
            k--;
            [arr[k],arr[j]] = [arr[j],arr[k]];
            j--;
        }
        j++;
    }

    while (k < arr.length) {
        [arr[k],arr[i+1]] = [arr[i+1],arr[k]];
        i++;
        k++;
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
splitArray ([1,1,1,2,2,2,3,4,4,4,4,5,5,5,2,2,2,1,1,1],2);
splitArray ([1,1,1],1);

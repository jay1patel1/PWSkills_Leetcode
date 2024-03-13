function quickSort2 (arr) {
    function split (arr,start,end) {

        if (start >= end) {
            return;
        } else {
            let pivot = Math.floor(Math.random () * ( end - start) + start);;
            let pivotValue = arr[pivot]; 
            let i = start-1;
            let j = start;

            [arr[pivot],arr[end]] = [arr[end],arr[pivot]];
            
            while ( j < end) {
                if (arr[j] < pivotValue) {
                    i++;
                    [arr[j],arr[i]] = [arr[i],arr[j]];
                    j++;
                } else {
                    j++
                }
            }

            [arr[i+1],arr[end]] = [arr[end],arr[i+1]]

            let left = split (arr,start,i);
            let right = split (arr,i+2,end);

        }
    }
    function sort (arr) {
        split(arr,0,(arr.length-1))
    }

    sort (arr);
    console.log(arr);
}

// quickSort2 ([4,1,8,9,3]);
// quickSort2 ([5, 2, 7, 1, 9, 3, 6, 4, 8]);
// quickSort2 ([1, 2, 3, 4, 5, 6, 7, 8, 9]);
// quickSort2 ([9, 8, 7, 6, 5, 4, 3, 2, 1]);
// quickSort2 ([3, 2, 4, 5, 2, 7, 5, 4, 8, 3, 2, 4, 5, 2, 7, 5, 4, 8, 3, 2, 4, 5, 2, 7, 5, 4, 8, 3, 2, 4, 5, 2, 7, 5, 4, 8, 3, 2, 4, 5, 2, 7, 5, 4, 8, 3, 2, 4, 5, 2, 7, 5, 4, 8]);
// quickSort2 ([-5, 2, -7, 1, -9, 3, -6, 4, 8]);
// quickSort2 ([3.14, 2.71, 1.618, 0.577, 2.718]);
// quickSort2 ([3.14, 2.71, 1.618, 2.718, 2.718, 0.577, 2.718, 0.577, 0.577]);

function randomNumber (value) {
    
    let arrays  = []

    for (let i = 0; i < value; i++) {
        let a = Math.floor(Math.random () * ( value - 0) + 0)
        arrays.push(a);
    }

    return arrays;
}

quickSort2 (randomNumber(5));
quickSort2 (randomNumber(3));
quickSort2 (randomNumber(4));
quickSort2 (randomNumber(5));
quickSort2 (randomNumber(6));
quickSort2 (randomNumber(50000));
quickSort2 (randomNumber(500));
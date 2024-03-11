function bubbleSortRecursion (arr) {
    let p_A = 0;
    let p_B = 1;
    let p_C = arr.length -1;

    function sort (arr,a,b,c) {
        if (c == 0) {
            return arr;
        }
        if (arr[a] > arr[b]) {
            [arr[a], arr[b]] = [arr[b], arr[a]]
        }
        a++;
        b++;
        if ((b-1) == c) {
            c--;
            a=0;
            b=1;
        }
        sort(arr,a,b,c);
        return arr;
    }

    let retrunArray = sort (arr,0,1,arr.length-1);

    return retrunArray;

}

console.log(bubbleSortRecursion([5,2,1,8,10,4,3,1]));
console.log(bubbleSortRecursion([64, 34, 25, 12, 22, 11, 90]));
console.log(bubbleSortRecursion([4, 1, 3, 9, 7]));
console.log(bubbleSortRecursion([-4, -1, -3, -9, -7]));
console.log(bubbleSortRecursion([-4, -1, -3, -9, -7]));
console.log(bubbleSortRecursion([1,1,1,1,1,1,1]));
console.log(bubbleSortRecursion([1,0,1,0,1,0,1]));
console.log(bubbleSortRecursion([-1,0,-1,0,-1,0,-1]));
console.log(bubbleSortRecursion([-1,8,-4,78,-45456456,7,-456456456456]));
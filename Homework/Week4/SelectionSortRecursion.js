function selectionSortRecursion (arr) {

    function sort (arr,a,b,c) {
        
        if (c == 0) {
            return arr;
        }

        if (a === c-1) {
            [arr[b], arr[c]] = [arr[c], arr[b]];
            c--;
            a = 0;
            b = 0;
        }

        if (arr[a] > arr [b]) {
            b = a;
            a++;
        } else {
            a++;
        }

        sort (arr,a,b,c);
    }

    let retrunArray = sort (arr,0,0,arr.length-1);

    return retrunArray;

}

console.log(selectionSortRecursion([5,2,1,8,10,4,3,1]));
// console.log(bubbleSortRecursion([64, 34, 25, 12, 22, 11, 90]));
// console.log(bubbleSortRecursion([4, 1, 3, 9, 7]));
// console.log(bubbleSortRecursion([-4, -1, -3, -9, -7]));
// console.log(bubbleSortRecursion([-4, -1, -3, -9, -7]));
// console.log(bubbleSortRecursion([1,1,1,1,1,1,1]));
// console.log(bubbleSortRecursion([1,0,1,0,1,0,1]));
// console.log(bubbleSortRecursion([-1,0,-1,0,-1,0,-1]));
// console.log(bubbleSortRecursion([-1,8,-4,78,-45456456,7,-456456456456]));
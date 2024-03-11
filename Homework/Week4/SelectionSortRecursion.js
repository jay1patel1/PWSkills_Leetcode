function selectionSortRecursion (arr) {

    function sort(arr,search,high,bucket) {

        if (bucket < 1 ) {
            return;
        } else {

            if (search < bucket) {
                if (arr[search] > arr[high]) {
                    high = search;
                    search++;
                } else {
                    search++;
                }
            } else {
                bucket--;
                [arr[high],arr[bucket]] = [arr[bucket],arr[high]];
                high = 0;
                search = 0;
            }
        }

        sort(arr,search,high,bucket);

        return arr;

    }

    return sort(arr, 0, 0, arr.length);
}

console.log(selectionSortRecursion([5,2,1,8,10,4,3,1]));
console.log(selectionSortRecursion([4,3,1]));
console.log(selectionSortRecursion([64, 34, 25, 12, 22, 11, 90]));
console.log(selectionSortRecursion([4, 1, 3, 9, 7]));
console.log(selectionSortRecursion([-4, -1, -3, -9, -7]));
console.log(selectionSortRecursion([-4, -1, -3, -9, -7]));
console.log(selectionSortRecursion([1,1,1,1,1,1,1]));
console.log(selectionSortRecursion([1,0,1,0,1,0,1]));
console.log(selectionSortRecursion([-1,0,-1,0,-1,0,-1]));
console.log(selectionSortRecursion([-1,8,-4,78,-45456456,7,-456456456456]));
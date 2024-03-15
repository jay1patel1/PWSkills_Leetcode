function findCount (A, B) {
    let target = B;
    let arr = A;

    function run (start,end) {
        
        if (start >= end) {
            if (arr[start] === target) {
                return 1;
            }
            return 0;
        } 
        
        let mid = Math.floor((start+end)/2);
        
        if (arr[mid] === target) {
            let cv = mid
            let count = 0;
            
            while (target == arr[cv]) {
                cv--
            }
            
            cv++

            while (target == arr[cv]) {
                count++
                cv++
            }

            return count;

        } else if (arr[mid] > target) {
            return run (start,mid-1);
        } else {
            return run (mid+1,end);
        }
    }
    return run (0,arr.length-1);
}

console.log(findCount([5, 7, 7, 8, 8, 10],8));
console.log(findCount([5, 7, 7, 8, 8, 10],9));
console.log(findCount([ 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10 ],1));
console.log(findCount([1],1));

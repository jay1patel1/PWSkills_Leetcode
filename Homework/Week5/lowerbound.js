function lowerBound (arr,val) {
   let n = arr.length;
   let lo = 0;
   let hi = n-1;
   let ans = arr.length;

   while (lo <= hi) {
       let mid = lo + Math.floor((hi-lo)/2);
       if (arr[mid] < val) {
           lo = mid + 1;
       } else {
           ans = mid;
           hi = mid - 1;
       }
   }

   return ans;
}

// Test case 1: Value exists in the array
let arr1 = [1, 2, 3, 3, 3, 4, 5];
let val1 = 3;
console.log(lowerBound(arr1, val1)); // Output: 2

// Test case 2: Value doesn't exist in the array
let arr2 = [1, 2, 4, 5, 6];
let val2 = 3;
console.log(lowerBound(arr2, val2)); // Output: 2

// Test case 3: Value is smaller than the smallest element in the array
let arr3 = [5, 7, 9, 11];
let val3 = 3;
console.log(lowerBound(arr3, val3)); // Output: 0

// Test case 4: Value is larger than the largest element in the array
let arr4 = [1, 3, 5, 7];
let val4 = 9;
console.log(lowerBound(arr4, val4)); // Output: 4

// Test case 5: Empty array
let arr5 = [];
let val5 = 5;
console.log(lowerBound(arr5, val5)); // Output: 0

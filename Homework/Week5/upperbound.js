function upperbound (arr,val) {
   let n = arr.length;
   let lo = 0;
   let hi = n-1;
   let ans = arr.length;

   while (lo <= hi) {
       let mid = lo + Math.floor((hi-lo)/2);
       if (arr[mid] <= val) {
           lo = mid + 1;
       } else {
           ans = mid;
           hi = mid - 1;
       }
   }

   return ans;
}

// console.log(upperbound([1,2,2,4,5], 3))
// console.log(upperbound([1,2,2,4,5], 5))
// Test Case 1: Empty array
console.log(upperbound([], 5)); // Output: 0

// Test Case 2: Array with one element
console.log(upperbound([5], 5)); // Output: 1

// Test Case 3: Array with all elements being the same
console.log(upperbound([1, 1, 1, 1, 1], 1)); // Output: 5

// Test Case 4: Array with negative numbers
console.log(upperbound([-5, -3, -2, 0, 1], -1)); // Output: 4

// Test Case 5: Array with positive numbers
console.log(upperbound([1, 3, 5, 7, 9], 4)); // Output: 3

// Test Case 6: Array with both negative and positive numbers
console.log(upperbound([-5, -3, 0, 2, 4], 1)); // Output: 4

// Test Case 7: Array with increasing numbers
console.log(upperbound([1, 2, 3, 4, 5], 3)); // Output: 3

// Test Case 8: Array with decreasing numbers
console.log(upperbound([5, 4, 3, 2, 1], 3)); // Output: 0

// Test Case 9: Array with repeating elements
console.log(upperbound([1, 2, 2, 4, 5], 2)); // Output: 3

// Test Case 10: Target being negative, positive, or zero
console.log(upperbound([1, 2, 3, 4, 5], -2)); // Output: 0
console.log(upperbound([1, 2, 3, 4, 5], 0)); // Output: 0

// Test Case 11: Target being smaller than all elements in the array
console.log(upperbound([1, 2, 3, 4, 5], -1)); // Output: 0

// Test Case 12: Target being greater than all elements in the array
console.log(upperbound([1, 2, 3, 4, 5], 10)); // Output: 5
// Test Case 1: Target exists in the array
console.log(upperbound([1, 2, 2, 4, 5], 2)); // Output: 3

// Test Case 2: Target doesn't exist in the array
console.log(upperbound([1, 2, 2, 4, 5], 3)); // Output: 3

// Test Case 3: Target is greater than any element in the array
console.log(upperbound([1, 2, 2, 4, 5], 6)); // Output: 5

// Test Case 4: Target is smaller than any element in the array
console.log(upperbound([1, 2, 2, 4, 5], 0)); // Output: 0

// Test Case 5: Empty array
console.log(upperbound([], 5)); // Output: 0

// Test Case 6: Array with only one element
console.log(upperbound([5], 5)); // Output: 1

// Test Case 7: Array with repeating elements
console.log(upperbound([1, 1, 1, 1, 1], 1)); // Output: 5

// Test Case 8: Target is negative
console.log(upperbound([-5, -3, -2, 0, 1], -1)); // Output: 3

function moveZeors (array) {
    let pointer_a = 0;
    let pointer_b = 0;

    while (pointer_b < array.length) {
        if (array[pointer_b] !== 0) {
            [array[pointer_a], array[pointer_b]] = [array[pointer_b], array[pointer_a]];
            pointer_a++
            pointer_b++
        } else if (array[pointer_b] === 0) {
            pointer_b++
        }
    }

    console.log(array);
    
}

moveZeors ([0,1,0,3,12]);

function testMoveZeros() {
    // Test Case 1: Basic case
    moveZeors([0, 1, 0, 3, 12]);
  
    // Test Case 2: Array with no zeros
    moveZeors([1, 2, 3, 4]);
  
    // Test Case 3: Empty array
    moveZeors([]);
  
    // Test Case 4: Array with all zeros
    moveZeors([0, 0, 0, 0]);
  
    // Test Case 5: Array with a single element
    moveZeors([5]);
  
    // Test Case 6: Multiple zeros at the beginning
    moveZeors([0, 0, 3, 0, 7]);
  
    // Test Case 7: Multiple zeros at the end
    moveZeors([2, 4, 0, 0, 0]);
  
    // Test Case 8: Alternating zeros and non-zeros
    moveZeors([0, 1, 0, 3, 0, 5, 0]);
  
    // Test Case 9: Array with only one non-zero element
    moveZeors([0, 0, 0, 7, 0, 0, 0]);
  
    // Test Case 10: Array with negative numbers and zeros
    moveZeors([-2, 0, 0, 4, 0, -7]);
  
    // Test Case 11: Array with floating-point numbers and zeros
    moveZeors([0.5, 0, 2.7, 0, 0, 1.3]);
  
    // Test Case 12: Array with a mix of positive and negative numbers
    moveZeors([-3, 0, 8, -1, 0, 4]);
  
    // Test Case 13: Large number of elements
    moveZeors(Array.from({ length: 10000 }, (_, i) => i % 2));
  
    // Test Case 14: Large number of zeros at the beginning
    moveZeors(Array.from({ length: 10000 }, (_, i) => i < 5000 ? 0 : i));
  
    // Test Case 15: Large number of zeros at the end
    moveZeors(Array.from({ length: 10000 }, (_, i) => i >= 5000 ? 0 : i));
  
    // Test Case 16: Random order of zeros and non-zeros
    moveZeors([4, 0, 2, 0, 0, 1, 9, 0, 5]);
  
    // Test Case 17: Repeated zeros
    moveZeors([0, 0, 3, 0, 0, 5, 0]);
  
    // Test Case 18: Repeated non-zero elements
    moveZeors([2, 2, 2, 2]);
  
    // Test Case 19: Mixed data types
    moveZeors(["a", 0, 3, "b", 0, 5, 0]);
  
    // Test Case 20: Null values and zeros
    moveZeors([null, 0, "hello", 0, true, 0]);
  
    // Test Case 21: Undefined values and zeros
    moveZeors([undefined, 0, "world", 0, false, 0]);
  
    // Test Case 22: NaN and zeros
    moveZeors([NaN, 0, Infinity, 0, -Infinity, 0]);
  
    // Test Case 23: Mix of positive and negative zeros
    moveZeors([0, -0, 0, 3, -0, 0, 5, 0]);
  
    // Test Case 24: Extremely large numbers and zeros
    moveZeors([Number.MAX_VALUE, 0, Number.MIN_VALUE, 0, Infinity, -Infinity, 0]);
  
    // Test Case 25: Objects and zeros
    moveZeors([{ a: 1 }, 0, { b: 2 }, 0, { c: 3 }, 0]);
  
    // Test Case 26: Arrays and zeros
    moveZeors([[1, 2], 0, [3, 4], 0, [5, 6], 0]);
  
    // Test Case 27: Functions and zeros
    moveZeors([() => console.log("Hello"), 0, () => alert("World"), 0, () => alert("GPT"), 0]);
  
    // Test Case 28: Mix of zeros and falsy values
    moveZeors([null, false, 0, undefined, 0, "", 0]);
  
    // Test Case 29: Mix of zeros and truthy values
    moveZeors([true]);
  }
  
  // Run all test cases
  testMoveZeros();
  
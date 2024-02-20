/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
    let pointer_a = 0
    let pointer_b = numbers.length-1

    while (pointer_a < pointer_b) {
        if (numbers[pointer_a]+numbers[pointer_b] > target) {
            pointer_b--;
        } else if (numbers[pointer_a]+numbers[pointer_b] < target) {
            pointer_a++;
        } else {
            // console.log([(pointer_a+1),(pointer_b+1)])
            return [(pointer_a+1),(pointer_b+1)];
        }
    }
};

twoSum([2,7,11,15],13);
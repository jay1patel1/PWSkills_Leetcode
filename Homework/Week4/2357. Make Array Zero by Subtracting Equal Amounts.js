/**
 * @param {number[]} nums
 * @return {number}
 */
let minimumOperations = function(nums) {
    
    let sortedArray = nums.sort((a,b) => b-a)

    let pointer_A = sortedArray.length - 1;

    let count = 0

    while (pointer_A >= 0) {

        while (sortedArray[pointer_A] == 0) {
            if (pointer_A === 0) {
                console.log(count);
                return count
            } else {
                pointer_A--
            }
        }

        for (let i = 0; i < sortedArray.length; i++) {
            if (sortedArray[i] !== 0) {
                sortedArray[i] -= sortedArray[pointer_A] 
            }

            if (i === pointer_A) {
                break;
            }
            
        }
        
        count++;
    }

    console.log(count);
    return count;
};

minimumOperations ([1,5,0,3,5]);
minimumOperations ([1]);
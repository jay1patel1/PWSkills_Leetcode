/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */
let successfulPairs = function(spells, potions, success) {
    let portionSort = potions.sort((a, b) => a-b);
    let success_Arr = [];

    for (let i = 0; i < spells.length; i++) {
        let lo = 0;
        let hi = portionSort.length - 1;
        let found = false;

        while (lo <= hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            let power = spells[i] * potions[mid];

            if (power < success) {
                    lo = mid + 1;
                } else {
                    hi = mid - 1;
                }
            }
        if ((spells[i] * potions[lo]) >= success) {
            success_Arr.push(portionSort.length - lo);
        } else {
            success_Arr.push(0);
        }
    }
    return  success_Arr;
};

console.log(successfulPairs([5,1,3],[1,2,3,4,5],7))
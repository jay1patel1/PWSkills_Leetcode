let successfulPairs = function(spells, potions, success) {

    let potionSorted = potions.sort((a,b) => a-b)
    let returnArr = [];

    for (let i = 0; i < spells.length; i++) {
        let lo = 0;
        let hi = potions.length-1;
        let count = 0;

        while (lo <= hi) {
            let mid = lo + Math.floor((hi-lo)/2);
            let val = spells[i]*potions[mid];

            if (val >= success) {
                hi = mid - 1;
            } else {
                lo = mid + 1;
            }
        }
        count = potions.length - lo;
        returnArr.push(count)
    }

    return returnArr;
}

console.log(successfulPairs([5,1,3],[1,2,3,4,5],7))
console.log(successfulPairs([3,1,2],[8,5,8],16))
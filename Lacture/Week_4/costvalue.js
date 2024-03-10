function minCostCal(arr) {
    let totalSum = 0;
    let totalCost = 0;

    for (const arrElement of arr) {
        totalSum += arrElement;
    }

    arr.sort((a,b) => b-a);

    for (const arrElement of arr) {
        totalCost += totalSum;
        totalSum -= arrElement;
    }

    return totalCost;
}

console.log(minCostCal([17, 42, 55, 29, 83, 6, 91, 38, 20, 74]));
console.log(minCostCal([4,1,6]));
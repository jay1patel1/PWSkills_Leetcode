let coinChange = function(arr2,n) {
    let arr = arr2.sort((a,b) => a-b)
    let coins = 0
    let pointer = arr.length -1;
    let sum = 0;

    while (sum < n) {
        let diff = n-sum;

        if (diff >= arr[pointer]) {
            sum += arr[pointer];
            coins++
        } else {
            pointer--
            if (pointer < 0) {
                return -1
            }
        }

        if (sum === n) {
            return coins
        }
    }

    return 0
};

console.log(coinChange([186,419,83,408],6249))
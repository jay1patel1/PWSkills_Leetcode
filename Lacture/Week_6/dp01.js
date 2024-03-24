// function fibo (n) {
//     if (n === 0 || n === 1) {
//         return n;
//     } else {
//         return dp(n-1) + dp(n-2);
//     }
// }

// console.log(fibo(300));

dpo = {};
function dp(n) {
    if (n === 0 || n === 1) {
        return n;
    } else {
        if (dpo[n]) {
            return dpo[n];
        } else {
            dpo[n] = dp(n-1) + dp(n-2);
            return dpo[n]; 
        }
    }
}


function f(n) {
    if(n == 0 || n == 1) return n;
    if(dp[n]) return dp[n];
    return dp[n] = f(n-1) + f(n-2);
}

var fib = function(n) {
    dp = {};
    return f(n);
};
console.log(fib(30));
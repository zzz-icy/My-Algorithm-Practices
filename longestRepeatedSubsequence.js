const lrs = (arr) => {
    const len = arr.length;
    const dp_base = Array(len + 1).fill(0);
    const dp = Array(len + 1).fill(dp_base);
    console.log(dp);
    for (let i = 1; i <= len; i++) {
        for (let j = 1; j <= len; j++) {
            if (arr[i - 1] == arr[j - 1] && i != j) {
                dp[i][j] = 1 + dp[i - 1][j - 1];

            }

            // If characters do not match 
            else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i - 1][j]);

            }
        }
    }
    return dp;
}


const str = 'AABEBCDD';
const result = lrs(str);
console.log(result);



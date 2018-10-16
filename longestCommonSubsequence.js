// Longest Common Subsequence

const lcs = (stringA, stringB) => {
    const a = stringA.length;
    const b = stringB.length;
    if (a == 0 || b == 0) {
        return 0;
    }
    else if (stringA[a - 1] == stringB[b - 1]) {
        return 1 + lcs(stringA.slice(0, a - 1), stringB.slice(0, b - 1))
    } else {
        return Math.max(
            lcs(stringA.slice(0, a), stringB.slice(0, b - 1)),
            lcs(stringA.slice(0, a - 1), stringB.slice(0, b))
        )
    }
}



const X = "AGGTAB";
const Y = "GXTXAYB";
const result = lcs(X, Y);
console.log(result);
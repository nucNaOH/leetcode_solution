/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
    if (s.length === 0) return 0;
    const dp = [];
    dp[1] = 1;
    for (let i = 2; i <= s.length; i++) {
        let count = 0;
        for (let j = i - 1; j >= 0; j--) {
            const substring = s.slice(j, i);
            if (isPalindromic(substring)) {
                count++;
            }
        }
        dp[i] = dp[i-1] + count;
    }
    return dp[s.length];
};

var isPalindromic = function (s) {
    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
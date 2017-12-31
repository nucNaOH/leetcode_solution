/**
 * 'Bottom-up' solution
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    var dp = Array.from(triangle);
    for (let i = dp.length - 2; i >= 0; i--) {
        for (let j = 0; j < dp[i].length; j++) {
            dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + dp[i][j];
        }
    }
    return dp[0][0];
};
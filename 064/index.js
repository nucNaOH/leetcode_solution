/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let dp = Array.from(grid);
    for (let i = 1; i < dp.length; i++) {
        dp[i][0] = dp[i - 1][0] + dp[i][0];
    }
    for (let j = 1; j < dp[0].length; j++) {
        dp[0][j] = dp[0][j - 1] + dp[0][j];
    }
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[i].length; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp.pop().pop();
};
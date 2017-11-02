/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length === 0) return 0;
    const dp = [];
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        const p1 = (i - 1 < 0) ? 0 : dp[i - 1];
        const p2 = (i - 2 < 0) ? 0 : dp[i - 2];
        dp[i] = Math.max(p1, p2 + nums[i]);
    }
    return dp[nums.length - 1];
};
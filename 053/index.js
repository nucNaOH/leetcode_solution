/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) return -Infinity;
    // init dp
    let dp = [nums[0]];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
        if (dp[i] > max) {
            max = dp[i];
        }
    }
    
    return max;
};
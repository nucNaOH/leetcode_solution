## 198. House Robber

__[Difficulty]__: _`Easy`_

__[Tag]__: _`DP`_

__[Question]__: 寻找数组中最大的不相邻数据之和。

__[Solution]__: 动态规划。

初值： dp[0] = nums[0];
递推公式： dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i]);

__[Complexity]__: `O(n)`

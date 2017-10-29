## 53. Maximum Subarray

__[Difficulty]__: _`Easy`_

__[Tag]__: _`DP`_

__[Question]__: 寻找数组num中的最大连续子数组之和。

__[Solution]__: 动态规划。

dp[i]表示以i结尾的连续子数组之和。

递推公式： dp[i] = max(dp[i-1] + dp[i], dp[i]);

注意：dp完成之后并没有结束，还需要在dp数组中找到最大值。

__[Complexity]__: `O(n)`

## 647. Palindromic Substrings

__[Difficulty]__: _`Medium`_

__[Tag]__: _`DP`_

__[Question]__: 统计字符串中回文子串的总个数（相同字符但不同下标需要重复计数）。

__[Solution]__: DP

递推公式：

dp[1] = 1
dp[i] = dp[i-1]+count

这里的`count`为所有从`0`~`i`的回文子串的总个数。

__[Complexity]__: `O(n^3)`

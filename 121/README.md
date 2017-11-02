## 121. Best Time to Buy and Sell Stock

__[Difficulty]__: _`Easy`_

__[Tag]__: _`DP`_

__[Question]__: 求最大收益。

__[Solution]__: 动态规划（Kadane's Algorithm），与最大连续子数组之和类似。

先将数组按公式变形：
maxCur += prices[i] - prices[i-1]，这样就转变成了连续的数组。如果连续数组之和小于0，则将和置为0.
例如：
{1, 7, 4, 11}, 变成 {0, 6, -3, 7}

递推公式：
maxCur = Math.max(0, maxCur += prices[i] - prices[i-1]);
maxSoFar = Math.max(maxCur, maxSoFar);

__[Complexity]__: `O(n)`

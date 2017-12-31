## 64. Minimum Path Sum

__[Difficulty]__: _`Medium`_

__[Tag]__: _`DP`_

__[Question]__: 求长方形二维数组的最小路径和。

__[Solution]__: 动态规划。

满足重叠子问题：相同路径需要反复计算；
满足最优子结构：可根据左边(i, j-1)、上边(i-1, j)相邻点的最小路径和，推出当前点(i,j)的最小路径和；

递推公式：

设grid(i, j)的最短路径和为 S[i][j]，则有：

S[i][j] = min(S[i - 1][j], S[i][j - 1]) + grid[i][j]

如此，S[m][n]即为所求。

__[Complexity]__: `O(n)`

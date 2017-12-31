## 120. Triangle

__[Difficulty]__: _`Medium`_

__[Tag]__: _`DP`_

__[Question]__: 求三角形二维数组的最小路径和。

__[Solution]__: 动态规划。

满足重叠子问题：相同路径需要反复计算；
满足最优子结构：可根据上一层的最小路径和，推出下一层的最小路径和；

这里采用从底向上的思路来做。【TODO：从上顶向下的思路及其解法】。

递推公式：

最小路径和，对于第k层，可由k+1层和k层推出：

minpath[k][i] = min( minpath[k+1][i], minpath[k+1][i+1]) + triangle[k][i];

如此，minpath[0][0]即为所求。

__[Complexity]__: `O(n)`

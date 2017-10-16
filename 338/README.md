## 338. Counting Bits

__[Difficulty]__: _`Medium`_

__[Tag]__: _`DP, Bit`_

__[Question]__: 计算从`0`到指定数字`num`的所有数的二进制形式中`1`的个数。

__[Solution]__: 动态规划。

递推公式：

bits[0] = 0
bits[1] = 1
bits[N] = (N & 1) + bits[i >> 1] (2 <= N <= N)

__[Complexity]__: `O(n^2)`

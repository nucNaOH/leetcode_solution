## 6. ZigZag Conversion

__[Difficulty]__: _`Medium`_

__[Tag]__: _`String`_

__[Question]__: 实现字符串的ZigZag转换。

__[Solution]__: 目前能想到3种思路，时间复杂度都是O(n)。

1. 利用二维数组（直接法）；
2. 利用一维数组（找规律法）；
3. 不利用任何数组直接找规律按顺序输出。

此题我实现了第一种和第三种。这里记录第一种方法的总体思路：先下如下定义：

zigLen: 从上到下竖向的长度（不包含最后一个）；
zagLen: 从左到右斜向上的长度（不包含最后一个）；
zigzagLen: zigLen和zagLen长度之和。

可以发现，一个zigzagLen是一个周期，每个周期的长度是zigLen的2倍，且以zigLen位置对称分开。由此规律即可将原字符串转换到二维数组的对应项上，最后再按层次顺序输出二维数组即可。

直接看代码吧。

__[Complexity]__: `O(n)`

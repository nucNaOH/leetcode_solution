## 8. String to Integer (atoi)

__[Difficulty]__: _`Medium`_

__[Tag]__: _`String`_

__[Question]__: 实现字符串转整数。

__[Solution]__: 先将字母全部转换成小写，然后分3步来做，第3步还需要区分16进制。

1. 去掉前导空格；
2. 获取符号位；
3. 解析数字。这里需要处理好以`0x`开始的16进制的处理。

__[Complexity]__: `O(n)`

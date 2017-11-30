## 17. Letter Combinations of a Phone Number

__[Difficulty]__: _`Medium`_

__[Tag]__: _`String`_ _`Back Tracking`_

__[Question]__: 给定数字字符串，输出其对应 9宫格手机键盘 里所有可能的字母组合。

__[Solution]__: 回溯法。

当 拼接的字符串（尝试性的组合） 的长度等于给定数字串的长度时，则得到一个合法的字母组合；

否则，

先给 拼接的字符串 增加一个字符，
再继续向下递归（长度增加），
再减少一个字符。

以此达到回溯的目的。

__[Complexity]__: `O(n^n)`

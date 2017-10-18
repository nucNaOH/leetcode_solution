## 3. Longest Substring Without Repeating Characters

__[Difficulty]__: _`Medium`_

__[Tag]__: _`String`_ _`Two Pointer`_

__[Question]__: 统计最长不重复字符子串的长度。

__[Solution]__: 用两个指针`i`、`j`都从头开始，指针`j`一步一步向结尾移动。每移动一步，判断指针`i`到`j`之间的子串是否有重复的字符，即判断`s[j]`与`s[k](k = i ~ j-1)`是否有相同字符（这里的判断过程可以通过构造哈希表来做优化）。

如果有相同字符，则指针`i`移动到`该相同字符后一位`。继续`单步`移动指针`j`，直到字符串结尾。过程中记录指针`i`与指针`j`之间最大的距离即为所求。

__[Complexity]__: `O(n)`

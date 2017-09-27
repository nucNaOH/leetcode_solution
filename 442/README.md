## 442. Find All Duplicates in an Array

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Array`_

__[Question]__: 找出数组中重复出现两次的所有数字。

__[Solution]__: 遍历一遍，利用hash表对数字出现的次数做记录，最后检查hash表，找出其中重复出现两次的所有数字即可。

讨论区里有一个利用如下公式，`nums[nums[i] -1] = -nums[nums[i]-1]`，不额外开辟内存空间直接在原地统计的方式，特此记录。

__[Complexity]__: `O(n)`

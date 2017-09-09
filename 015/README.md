## 15. 3Sum

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Array`_ _`Two Pointer`_

__[Question]__: 输出数组`nums`中和为`0`的不重复三元组。

__[Solution]__: 先对数组`nums`排序，之后选定三元组中最小的数`nums[i]`，用两个指针`p`、`q`分别指向剩余数组中的下一项`nums[i+1]`和最后一项`nums.length-1`。当`p > q`时，寻找`nums[p]`、`nums[q]`与`nums[i]`和为`0`的组合，同时要注意跳过重复的项，代码如下：`while(p < q && nums[p+1] === nums[p])`。

__[Complexity]__: `O(n^2)`

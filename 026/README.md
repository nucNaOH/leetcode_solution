## 26. Remove Duplicates from Sorted Array

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Array`_

__[Question]__: 原地去除已排序数组`nums`中的重复值。

__[Solution]__: 遍历数组`nums`，同时设置两个指针：`i指针`和`p指针`，`i指针`指向当前位置，`p指针`指向已去重的位置。当`nums[i] !== nums[p]`时，`nums[++p] = nums[i]`即可。

__[Complexity]__: `O(n)`

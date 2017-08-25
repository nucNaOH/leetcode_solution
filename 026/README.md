## 26. Remove Duplicates from Sorted Array

__[Difficulty]__: _`Easy`_

__[Solution]__:题目要求在已排序的数组`nums`上原地去重，思路是在遍历时设置两个指针：`i指针`和`p指针`，`i指针`指向当前位置，`p指针`指向已去重的位置。当`nums[i] !== nums[p]`时，`nums[++p] = nums[i];`即可。

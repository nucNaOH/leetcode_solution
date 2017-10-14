## 654. Maximum Binary Tree

__[Difficulty]__: _`Medium`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 求`最大值二叉树`，实际上就是数组`nums`转二叉树，按数组的最大值分割，根节点为最大值，最大值左侧为左子树，右侧为右子树。

__[Solution]__: 递归。

递归出口：

1. 数组长度为`0`，返回`null`；
2. 数组长度为`1`，返回`new TreeNode(nums[0])`；

递归深入：

寻找数组中的最大值`maxValue`及其索引（下标）`maxValueIndex`，并用最大值创建一个根节点`tree = new TreeNode(nums[maxValueIndex])`，根节点的左子树由数组左侧（`0~maxValueIndex`）递归创建，根节点的右子树由数组右侧（`maxValueIndex~nums.length`）递归创建

__[Complexity]__: `O(n)`

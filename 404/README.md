## 404. Sum of Left Leaves

__[Difficulty]__: _`Easy`_

__[Tag]__: _`Binary Tree`_

__[Question]__: 输出二叉树的左叶子节点值之和。

__[Solution]__: 递归`sumOfLeftLeaves`。

递归出口：根节点`root`为空`null`

递归深入：当`root`的左节点是叶子节点时，结果为___左叶子节点值___与___右子树的左叶子节点值___之和相加；否则，结果为___左子树的左叶子节点值___与___右子树的左叶子节点值___之和相加。

__[Complexity]__: `O(n)`
